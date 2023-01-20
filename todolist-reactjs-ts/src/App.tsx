import { Tasks } from './components/Tasks'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import './global.css'

export function App() {
  return (
    <>
      <header className={styles.navbar}>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className={styles.createTodoContainer}>
          <Tasks />
        </div>
      </main>
    </> 
  )
}