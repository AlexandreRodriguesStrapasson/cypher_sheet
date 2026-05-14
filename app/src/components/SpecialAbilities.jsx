import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

export default function SpecialAbilities() {
  const { sheet, setField } = useSheet();

  return (
    <Card title="Habilidades Especiais">
      <textarea
        className={styles.textArea}
        value={sheet.specialAbilities}
        onChange={(e) => setField('specialAbilities', e.target.value)}
        placeholder="Descreva as habilidades do tipo, descritor e foco. Use 'Aplicar Presets' no topo para preencher automaticamente."
      />
    </Card>
  );
}
