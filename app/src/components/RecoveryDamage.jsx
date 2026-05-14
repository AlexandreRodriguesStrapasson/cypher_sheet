import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

const RECOVERY_LABELS = [
  ['action', '1 Ação'],
  ['tenMins', '10 Minutos'],
  ['oneHour', '1 Hora'],
  ['tenHours', '10 Horas'],
];

const DAMAGE_STATES = [
  ['hale', 'Saudável', 'dmgBtnHale'],
  ['impaired', 'Prejudicado', 'dmgBtnImpaired'],
  ['debilitated', 'Debilitado', 'dmgBtnDebilitated'],
];

export default function RecoveryDamage() {
  const { sheet, setField } = useSheet();

  return (
    <Card title="Recuperação & Dano">
      <div className={styles.recoveryDamage}>
        <div>
          <div className={styles.miniHeader}>
            <span>Rolagens</span>
            <input
              className={styles.miniBonus}
              value={sheet.recoveryBonus}
              onChange={(e) => setField('recoveryBonus', e.target.value)}
              placeholder="1d6+"
            />
          </div>
          <div className={styles.checkGrid}>
            {RECOVERY_LABELS.map(([key, label]) => (
              <label key={key} className={styles.check}>
                <input
                  type="checkbox"
                  checked={sheet.recovery[key]}
                  onChange={(e) => setField(`recovery.${key}`, e.target.checked)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.miniHeader}>Trilha de Dano</div>
          <div className={styles.damageList}>
            {DAMAGE_STATES.map(([key, label, variant]) => {
              const active = sheet.damage === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={[
                    styles.dmgBtn,
                    styles[variant],
                    active ? styles.dmgBtnActive : '',
                  ].join(' ')}
                  onClick={() => setField('damage', key)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
