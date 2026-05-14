import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

export default function Attacks() {
  const { sheet, setField } = useSheet();

  return (
    <Card title="Ataques">
      <div className={styles.list}>
        {sheet.attacks.map((attack, i) => (
          <input
            key={i}
            className={styles.listItem}
            value={attack}
            onChange={(e) => setField(`attacks.${i}`, e.target.value)}
            placeholder={`Ataque ${i + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}
