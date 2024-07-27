
import Button from '@/components/ui/button'
import styles from './backdoor.module.css'
import signIn from '@/connections/signin'
import { useEffect, useState } from 'react'

type User = {
  email: string
  password: string
}

const BackDoorForm = ({ onAuthSucceess }: { onAuthSucceess: (response: any) => void }) => {
  const title = 'WACHII BACK DOOR'
  const [isError, setIsError] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [user, setUser] = useState<User>({
    email: '',
    password: ''
  })

  const updateState = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    })
  }

  const signEnter = async () => {
    const userData = await signIn(user.email, user.password);
    if (userData.result) {
      setIsError(false)
      onAuthSucceess(userData.result)
      setIsAuth(true)
    } else {
      setIsError(true)
      const error = userData.error as Error
      setErrorMessage(error.message)
      setIsAuth(false)
      setTimeout(() => {
        setErrorMessage('')
        setIsError(false)
      }, 3000)
    }
  }

  const checkCache = async () => {
    const cache = localStorage.getItem(`!1::user-cache`)
    if (cache) {
      onAuthSucceess(JSON.parse(cache))
      setIsAuth(true)
    }
  }

  useEffect(() => {
    checkCache()
  }, [])

  return (
    <div className={styles['admin-container']}>
      <div>{title}</div>
      <div className={styles.panel}>
        <form onSubmit={(e) => {
          e.preventDefault()
          signEnter();
        }}>
        <div className={styles['input-group']}>
          <label htmlFor='email'>Username</label>
          <input type='text' placeholder='Email' id='email' onChange={updateState} />
        </div>
        <div className={styles['input-group']}>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password' id='password' onChange={updateState}/>
        </div>
        <div className={styles['button-container']}>
          <Button type='submit' onClick={signEnter}>GO</Button>
        </div>
      </form>
      {isAuth && <div className={[styles['button-container'], styles.hidden].join(' ')}>
        <Button onClick={signEnter}>Hidden active</Button>
      </div>}
      </div>
      {isError && <div className={styles['error-container']}>{errorMessage}</div>}
    </div>
  )
}

export default BackDoorForm
