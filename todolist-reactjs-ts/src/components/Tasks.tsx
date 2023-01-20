import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './Tasks.module.css'
import { v4 as uuid } from 'uuid'
import { Task } from './Task'
import { EmptyTaskList } from './EmptyTaskList'

export function Tasks(){
    const [listOfTask, setListOfTask] = useState([{
        id: uuid(),
        description: 'Estudar Japones',
        hasDone: false,
    }])
    const [newTask, setNewTask] = useState<string>('')

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleCreateTaskOnList(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setListOfTask(state => [...state, {id: uuid(), description: newTask, hasDone: false}])
        setNewTask('')
    }

    function handleNewEmptyTask(event: ChangeEvent<HTMLInputElement>)  {
        event.target.setCustomValidity('É necessário preencher esse campo.')
    }

    function handleDeleteTask(taskText: string) {
        const taskWithoutDeletedOne = listOfTask.filter(task => task.description !== taskText)
        setListOfTask(taskWithoutDeletedOne)
    }

    function handleCheckListOnTask(id: string)  {
        const newTaskList = listOfTask.map(task => {
            if (task.id === id) {
              task.hasDone = !task.hasDone
            }
      
            return task
        })
      
        setListOfTask(newTaskList)
    }

    const sumOfDoneTasks = listOfTask.filter(task =>  task.hasDone !== false )
    const isNewTaskEmpty = newTask.length === 0 
    
    return(
        <div>
            <form onSubmit={handleCreateTaskOnList} className={styles.wrapper}>
                <input 
                    type="text" 
                    onChange={handleNewTask} 
                    placeholder='Adicione a sua task...' 
                    value={newTask}
                    onInvalid={handleNewEmptyTask}
                    required
                />
                <button type='submit' disabled={isNewTaskEmpty}>
                    Criar
                    <PlusCircle size={16}/>
                </button>
            </form>

            <div>
                <div className={styles.taskStatus}>
                    <div className={styles.createdTasks}>
                        <span>Tarefas Criadas:&nbsp; </span>
                        <span className={styles.counter}> {listOfTask.length}</span>
                    </div>
                    <div className={styles.doneTasks}>
                        <span>Concluídas:&nbsp; </span>
                        <span className={styles.counter}>{sumOfDoneTasks.length} de {listOfTask.length}</span>
                    </div>
                </div>
                <div>
                    {listOfTask.map((task) => (
                        <Task
                            key={task.id} 
                            id={task.id} 
                            description={task.description} 
                            hasDone={task.hasDone} 
                            taskTobeDeleted={handleDeleteTask} 
                            tasksDone={handleCheckListOnTask} 
                        />
                    ))}
                </div>
                <div>
                    {listOfTask.length === 0 && <EmptyTaskList />}
                </div>
            </div>
        </div>
    )
}