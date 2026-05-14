import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

export default function Cyphers() {
  const { sheet, setField } = useSheet();

  const footer = (
    <>
      <span>Limite</span>
      <input
        className={styles.miniBonus}
        type="number"
        min={0}
        value={sheet.cypherLimit}
        onChange={(e) => setField('cypherLimit', Number(e.target.value) || 0)}
      />
    </>
  );

  return (
    <Card title="Cyphers" footer={footer}>
      <div className={styles.list}>
        {sheet.cyphers.map((cypher, i) => (
          <input
            key={i}
            className={styles.listItem}
            value={cypher}
            onChange={(e) => setField(`cyphers.${i}`, e.target.value)}
            placeholder={`Cypher ${i + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}
