import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import logo from './assets/logo.svg';
import Input from './components/input';
import Button from './components/button';
import Counter from './components/counter';
import Task from './components/task';

function App() {
  const [inputText, setInputText] = useState('');
  const [newTasks, setNewTasks] = useState<string[]>([]);
  const [completeTasks, setCompleteTasks] = useState<string[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log({ event });
    setInputText(event.target.value);
  };

  const handleCreateTask = () => {
    if (newTasks.includes(inputText)) window.alert('Tarefa já adicionada.');
    else if (inputText) {
      setNewTasks([...newTasks, inputText]);
      setInputText('');
    }
  };

  const handleCompleteTask = (task: string) => {
    if (task) {
      setNewTasks(newTasks.filter((currentTask) => currentTask !== task ));
      setCompleteTasks([...completeTasks, task]);
    }
  };
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>
      <div className={styles.inputWrapper}>
        <Input placeholder="Adicione uma nova tarefa" onKeyDown={(e) => { if (e.key === 'Enter') handleCreateTask()}} onChange={handleInputChange}/>
        <Button text="Criar" onClick={handleCreateTask} />
      </div>
      
      <div className={styles.textWrapper}>
        <div>
          <p> Tarefas criadas </p>
          <Counter text={newTasks.length.toString()} />
        </div>
        <div>
          <p> Tarefas Concluídas </p>
          <Counter text={completeTasks.length.toString()} />
        </div>  
      </div>

      <section>
        {newTasks.map((task) => (
          <Task isChecked={completeTasks.includes(task)} text={task} key={task} onClick={() => handleCompleteTask(task)} />
        ))}
          {completeTasks.map((task) => (
          <Task isChecked={completeTasks.includes(task)} text={task} key={task} onClick={() => setInputText(task)} />
        ))}
      </section>
    </div>
  )
}

export default App;

