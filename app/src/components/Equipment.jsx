import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

export default function Equipment() {
  const { sheet, setField } = useSheet();

  const footer = (
    <>
      <label className={styles.field} style={{ flex: 1 }}>
        <input
          className={styles.fieldInput}
          value={sheet.armor}
          onChange={(e) => setField('armor', e.target.value)}
          placeholder="—"
        />
        <span className={styles.fieldLabel}>Armadura</span>
      </label>
      <label className={styles.field} style={{ flex: 1 }}>
        <input
          className={styles.fieldInput}
          value={sheet.money}
          onChange={(e) => setField('money', e.target.value)}
          placeholder="—"
        />
        <span className={styles.fieldLabel}>Dinheiro</span>
      </label>
    </>
  );

  return (
    <Card title="Equipamento" footer={footer}>
      <div className={styles.list}>
        {sheet.equipment.map((item, i) => (
          <input
            key={i}
            className={styles.listItem}
            value={item}
            onChange={(e) => setField(`equipment.${i}`, e.target.value)}
            placeholder={`Item ${i + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}
