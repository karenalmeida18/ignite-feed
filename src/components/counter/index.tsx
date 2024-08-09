import styles from './counter.module.css';

interface CounterProps {
  text: string;
}

export default function Counter({ text }: CounterProps) {
  return (
    <div className={styles.container}>
       {text}
    </div>
  )
}