import styles from '../styles/Sheet.module.css';
import { useSheet } from '../context/SheetContext';
import { exportSheetToPdf } from '../utils/exportPdf';

export default function Toolbar({ sheetRef }) {
  const { sheet, applyPresets, reset } = useSheet();

  const handleExport = async () => {
    try {
      const name = sheet.identity.name?.trim() || 'ficha-cypher';
      await exportSheetToPdf(sheetRef.current, `${name}.pdf`);
    } catch (err) {
      console.error(err);
      alert('Falha ao gerar PDF. Veja o console.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza que deseja limpar a ficha? Esta ação não pode ser desfeita.')) {
      reset();
    }
  };

  return (
    <header className={styles.toolbar}>
      <div className={styles.brand}>
        Cypher <b>Sheet</b>
      </div>
      <div className={styles.toolbarActions}>
        <button type="button" className={styles.btn} onClick={applyPresets} title="Preencher Pools, Edges e Habilidades a partir do Tipo/Descritor/Foco">
          Aplicar Presets
        </button>
        <button type="button" className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleExport}>
          Exportar PDF
        </button>
        <button type="button" className={`${styles.btn} ${styles.btnGhost}`} onClick={handleReset}>
          Limpar
        </button>
      </div>
    </header>
  );
}
