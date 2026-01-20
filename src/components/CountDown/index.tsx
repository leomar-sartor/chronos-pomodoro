import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ state }: HomeProps) {
  return <h1 className={styles.container}> {state.formattedSecondsRemaining} </h1>;
}