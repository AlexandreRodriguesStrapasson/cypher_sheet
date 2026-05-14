import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

const LEVELS = ['none', 'trained', 'specialized', 'inability'];

function cycleLevel(current, target) {
  if (current === target) return 'none';
  return target;
}

export default function Skills() {
  const { sheet, setField } = useSheet();

  const setSkillLevel = (index, level) => {
    setField(`skills.${index}.level`, cycleLevel(sheet.skills[index].level, level));
  };

  return (
    <Card title="Perícias">
      <div className={styles.skillLegend}>
        <span>T = treinado</span>
        <span>S = especializado</span>
        <span>I = inabilidade</span>
      </div>
      <div className={styles.skillsHeader}>
        <span>Perícia</span>
        <span>T</span>
        <span>S</span>
        <span>I</span>
      </div>
      {sheet.skills.map((skill, i) => (
        <div key={i} className={styles.skillRow}>
          <input
            className={styles.skillName}
            value={skill.name}
            onChange={(e) => setField(`skills.${i}.name`, e.target.value)}
            placeholder="—"
          />
          <button
            type="button"
            aria-label="Treinado"
            className={`${styles.skillCircle} ${skill.level === 'trained' ? styles.skillCircleActive : ''}`}
            onClick={() => setSkillLevel(i, 'trained')}
          />
          <button
            type="button"
            aria-label="Especializado"
            className={`${styles.skillCircle} ${skill.level === 'specialized' ? styles.skillCircleActive : ''}`}
            onClick={() => setSkillLevel(i, 'specialized')}
          />
          <button
            type="button"
            aria-label="Inabilidade"
            className={`${styles.skillCircle} ${skill.level === 'inability' ? styles.skillCircleInability : ''}`}
            onClick={() => setSkillLevel(i, 'inability')}
          />
        </div>
      ))}
    </Card>
  );
}

export { LEVELS };
