import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

const ITEMS = [
  {
    key: 'increaseCapabilities',
    title: 'Aumentar Capacidades',
    desc: '+4 pontos distribuídos nos Pools',
  },
  {
    key: 'moveTowardPerfection',
    title: 'Rumo à Perfeição',
    desc: '+1 no Edge de sua escolha',
  },
  {
    key: 'extraEffort',
    title: 'Esforço Extra',
    desc: '+1 no Effort máximo',
  },
  {
    key: 'skillTraining',
    title: 'Treinamento',
    desc: 'Treinar ou especializar perícia',
  },
  {
    key: 'other',
    title: 'Outro',
    desc: 'Consulte o livro do sistema',
  },
];

export default function Advancement() {
  const { sheet, setField } = useSheet();

  return (
    <Card title="Avanço">
      <div className={styles.advancement}>
        {ITEMS.map((item) => {
          const active = sheet.advancement[item.key];
          return (
            <button
              key={item.key}
              type="button"
              className={`${styles.advItem} ${active ? styles.advItemActive : ''}`}
              onClick={() => setField(`advancement.${item.key}`, !active)}
            >
              <div className={styles.advBox} />
              <div className={styles.advTitle}>{item.title}</div>
              <div className={styles.advDesc}>{item.desc}</div>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
