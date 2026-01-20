import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function CountDown() {

  const taskContext = useTaskContext();
  console.log(taskContext);
  
  return <h1 className={styles.container}> 00:00 </h1>;
}