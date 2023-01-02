import styles from './task.module.css';
import { Check, Trash } from "phosphor-react";
import { ITask } from '../../App';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.container}>
      <button
        className={styles.buttonCheck}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <Check size={10} color="#ffffff" /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  )
}