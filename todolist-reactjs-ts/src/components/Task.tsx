import { Trash } from "phosphor-react"
import styles from "./Task.module.css"

interface TaskProps {
    id: string;
    description: string;
    hasDone: boolean;
    taskTobeDeleted: (task: string) => void;
    tasksDone: (id: string) => void;
}

export function Task({ id, description, hasDone, taskTobeDeleted, tasksDone }: TaskProps) {
    function deleteTask() {
        taskTobeDeleted(description)
    }

    function doneTask() {
        tasksDone(id)
    }

    return(
        <div className={hasDone ? styles.taskContentChecked : styles.taskContent}>
            <input type="checkbox" onChange={doneTask} defaultChecked={hasDone}/> 
            <p className={hasDone ? styles.descriptionOfTasksThatHasBeenDone : styles.descriptionOfTasksThatNotBeenDone}>{description}</p>
            <button title="Deletar comentário" onClick={deleteTask} >
                <Trash size={24}/>
            </button>
        </div>
    )
}