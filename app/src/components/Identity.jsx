import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import { DESCRIPTORS, FOCI, TYPES } from '../data/presets';
import Card from './Card';

function Field({ label, children }) {
  return (
    <label className={styles.field}>
      {children}
      <span className={styles.fieldLabel}>{label}</span>
    </label>
  );
}

export default function Identity() {
  const { sheet, setField } = useSheet();
  const { identity } = sheet;

  return (
    <Card title="Identidade">
      <div className={styles.identity}>
        <Field label="Nome">
          <input
            className={styles.fieldInput}
            value={identity.name}
            onChange={(e) => setField('identity.name', e.target.value)}
            placeholder="Nome do personagem"
          />
        </Field>

        <div className={styles.identityRow}>
          <span className={styles.connector}>É um</span>
          <Field label="Descritor">
            <select
              className={styles.inlineSelect}
              value={identity.descriptor}
              onChange={(e) => setField('identity.descriptor', e.target.value)}
            >
              <option value="">—</option>
              {Object.keys(DESCRIPTORS).map((key) => (
                <option key={key} value={key}>{DESCRIPTORS[key].label}</option>
              ))}
            </select>
          </Field>
          <span className={styles.connector}>que</span>
          <Field label="Tipo">
            <select
              className={styles.inlineSelect}
              value={identity.type}
              onChange={(e) => setField('identity.type', e.target.value)}
            >
              <option value="">—</option>
              {Object.keys(TYPES).map((key) => (
                <option key={key} value={key}>{TYPES[key].label}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Foco">
          <select
            className={styles.inlineSelect}
            value={identity.focus}
            onChange={(e) => setField('identity.focus', e.target.value)}
          >
            <option value="">—</option>
            {Object.keys(FOCI).map((key) => (
              <option key={key} value={key}>{FOCI[key].label}</option>
            ))}
          </select>
        </Field>

        <Field label="Tipo, Sabor ou Outro">
          <input
            className={styles.fieldInput}
            value={identity.flavor}
            onChange={(e) => setField('identity.flavor', e.target.value)}
            placeholder="ex: Aventureiro de Estrada"
          />
        </Field>
      </div>
    </Card>
  );
}
