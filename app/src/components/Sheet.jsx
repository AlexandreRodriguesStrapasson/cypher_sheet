import { useRef } from 'react';
import styles from '../styles/Sheet.module.css';
import Toolbar from './Toolbar';
import Identity from './Identity';
import CharacterStats from './CharacterStats';
import RecoveryDamage from './RecoveryDamage';
import Skills from './Skills';
import Advancement from './Advancement';
import SpecialAbilities from './SpecialAbilities';
import Attacks from './Attacks';
import Portrait from './Portrait';
import Cyphers from './Cyphers';
import Equipment from './Equipment';

export default function Sheet() {
  const sheetRef = useRef(null);

  return (
    <main className={styles.page}>
      <Toolbar sheetRef={sheetRef} />

      <div ref={sheetRef} className={styles.sheet}>
        <div className={styles.col}>
          <Identity />
          <CharacterStats />
          <RecoveryDamage />
          <Skills />
        </div>

        <div className={styles.col}>
          <Advancement />
          <SpecialAbilities />
          <Attacks />
        </div>

        <div className={styles.col}>
          <Portrait />
          <Cyphers />
          <Equipment />
        </div>
      </div>
    </main>
  );
}
