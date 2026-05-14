import { createContext, useCallback, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { buildEdges, buildPools, buildSpecialAbilities } from '../data/presets';

const STORAGE_KEY = 'cypher-sheet:v1';

const INITIAL_SHEET = {
  identity: {
    name: '',
    descriptor: '',
    type: '',
    focus: '',
    flavor: '',
  },
  tier: 1,
  effort: 1,
  xp: 0,
  stats: {
    might: { pool: 0, max: 0, edge: 0 },
    speed: { pool: 0, max: 0, edge: 0 },
    intellect: { pool: 0, max: 0, edge: 0 },
  },
  recovery: { action: false, tenMins: false, oneHour: false, tenHours: false },
  recoveryBonus: '',
  damage: 'hale',
  skills: Array.from({ length: 12 }, () => ({ name: '', level: 'none' })),
  advancement: {
    increaseCapabilities: false,
    moveTowardPerfection: false,
    extraEffort: false,
    skillTraining: false,
    other: false,
  },
  specialAbilities: '',
  attacks: Array.from({ length: 5 }, () => ''),
  cyphers: Array.from({ length: 6 }, () => ''),
  cypherLimit: 2,
  equipment: Array.from({ length: 8 }, () => ''),
  armor: '',
  money: '',
  portrait: '',
};

const SheetContext = createContext(null);

export function SheetProvider({ children }) {
  const [sheet, setSheet] = useLocalStorage(STORAGE_KEY, INITIAL_SHEET);

  const update = useCallback((updater) => {
    setSheet((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : { ...prev, ...updater };
      return next;
    });
  }, [setSheet]);

  const setField = useCallback((path, value) => {
    setSheet((prev) => setIn(prev, path, value));
  }, [setSheet]);

  const applyPresets = useCallback(() => {
    setSheet((prev) => {
      const { type, descriptor, focus } = prev.identity;
      const pools = buildPools(type, descriptor);
      const edges = buildEdges(type);
      const stats = { ...prev.stats };
      for (const key of ['might', 'speed', 'intellect']) {
        const max = pools[key] ?? prev.stats[key].max;
        stats[key] = {
          pool: max,
          max,
          edge: edges[key] ?? prev.stats[key].edge,
        };
      }
      const specialAbilities = buildSpecialAbilities(type, descriptor, focus);
      return { ...prev, stats, specialAbilities };
    });
  }, [setSheet]);

  const reset = useCallback(() => setSheet(INITIAL_SHEET), [setSheet]);

  const value = useMemo(
    () => ({ sheet, update, setField, applyPresets, reset }),
    [sheet, update, setField, applyPresets, reset],
  );

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
}

export function useSheet() {
  const ctx = useContext(SheetContext);
  if (!ctx) throw new Error('useSheet must be used inside <SheetProvider>');
  return ctx;
}

function setIn(obj, path, value) {
  const keys = Array.isArray(path) ? path : path.split('.');
  if (keys.length === 0) return value;
  const [head, ...rest] = keys;
  const isIndex = /^\d+$/.test(head);
  const container = Array.isArray(obj) ? [...obj] : { ...obj };
  container[isIndex ? Number(head) : head] = rest.length
    ? setIn(obj?.[isIndex ? Number(head) : head] ?? (isIndex ? [] : {}), rest, value)
    : value;
  return container;
}
