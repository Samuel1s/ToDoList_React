import styles from './EmptyTaskList.module.css'
import List from '../assets/list.svg'

export const EmptyTaskList = () => {
    return (
        <div className={styles.contentEmptyTaskList}>
            <img src={List} alt="" />
            <div className={styles.taskAlert}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}