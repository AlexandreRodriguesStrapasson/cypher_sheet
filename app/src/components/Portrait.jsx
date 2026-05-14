import { useRef } from 'react';
import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import Card from './Card';

export default function Portrait() {
  const { sheet, setField } = useSheet();
  const inputRef = useRef(null);

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setField('portrait', reader.result);
    reader.readAsDataURL(file);
  };

  const clear = (e) => {
    e.stopPropagation();
    setField('portrait', '');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <Card title="Retrato">
      <div className={styles.portrait}>
        {sheet.portrait ? (
          <>
            <img className={styles.portraitImg} src={sheet.portrait} alt="Retrato do personagem" />
            <button type="button" className={styles.portraitRemove} onClick={clear} title="Remover">
              ×
            </button>
          </>
        ) : (
          <span className={styles.portraitEmpty}>Clique para enviar</span>
        )}
        <input
          ref={inputRef}
          className={styles.portraitInput}
          type="file"
          accept="image/*"
          onChange={onFile}
        />
      </div>
    </Card>
  );
}
