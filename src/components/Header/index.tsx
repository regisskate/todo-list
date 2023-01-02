import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = title.length === 0;

  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="" />
        <form onSubmit={handleNewTask} className={styles.newTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={onChangeTitle}
            onInvalid={handleNewTaskInvalid}
            value={title}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </header>
    </>
  )
}