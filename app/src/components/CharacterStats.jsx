import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

function NumberBox({ label, value, onChange }) {
  return (
    <div className={styles.bigBox}>
      <input
        className={styles.bigBoxValue}
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
      />
      <div className={styles.bigBoxLabel}>{label}</div>
    </div>
  );
}

function StatColumn({ name, label, stat, onChange }) {
  const ratio = stat.max > 0
    ? Math.max(0, Math.min(100, (stat.pool / stat.max) * 100))
    : 0;

  return (
    <div className={styles.statCol}>
      <div className={styles.statHeader}>{label}</div>

      <div className={styles.statPair}>
        <div className={styles.statCell}>
          <input
            className={styles.statValue}
            type="number"
            min={0}
            value={stat.pool}
            onChange={(e) => onChange(name, 'pool', Number(e.target.value) || 0)}
          />
          <div className={styles.statSubLabel}>Pool</div>
        </div>
        <div className={styles.statCell}>
          <input
            className={styles.statValue}
            type="number"
            min={0}
            value={stat.edge}
            onChange={(e) => onChange(name, 'edge', Number(e.target.value) || 0)}
          />
          <div className={styles.statSubLabel}>Edge</div>
        </div>
      </div>

      <div>
        <div className={styles.poolBar} role="progressbar" aria-valuenow={stat.pool} aria-valuemax={stat.max}>
          <div className={styles.poolBarFill} style={{ width: `${ratio}%` }} />
        </div>
        <div className={styles.poolBarMeta}>
          <span>máx</span>
          <input
            className={styles.miniBonus}
            type="number"
            min={0}
            value={stat.max}
            onChange={(e) => onChange(name, 'max', Number(e.target.value) || 0)}
            style={{ width: 44, marginLeft: 4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CharacterStats() {
  const { sheet, setField } = useSheet();
  const setStat = (name, key, value) => setField(`stats.${name}.${key}`, value);

  return (
    <Card title="Status">
      <div className={styles.tripleBoxes}>
        <NumberBox label="Tier" value={sheet.tier} onChange={(v) => setField('tier', v)} />
        <NumberBox label="Effort" value={sheet.effort} onChange={(v) => setField('effort', v)} />
        <NumberBox label="XP" value={sheet.xp} onChange={(v) => setField('xp', v)} />
      </div>

      <div style={{ height: 'var(--sp-4)' }} />

      <div className={styles.stats}>
        <StatColumn name="might" label="Força" stat={sheet.stats.might} onChange={setStat} />
        <StatColumn name="speed" label="Velocidade" stat={sheet.stats.speed} onChange={setStat} />
        <StatColumn name="intellect" label="Intelecto" stat={sheet.stats.intellect} onChange={setStat} />
      </div>
    </Card>
  );
}
