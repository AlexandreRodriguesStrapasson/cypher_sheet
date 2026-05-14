import styles from '../styles/Sheet.module.css';

export default function Card({ title, action, footer, children, className = '' }) {
  return (
    <section className={`${styles.card} ${className}`}>
      {title && (
        <header className={styles.cardHeader}>
          <span>{title}</span>
          {action}
        </header>
      )}
      {children}
      {footer && <footer className={styles.cardFooter}>{footer}</footer>}
    </section>
  );
}
