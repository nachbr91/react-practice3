import { useState, useRef } from 'react'

import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './UserForm.module.css'

const UserForm = (props) => {
  const usernameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredName = usernameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid username and age (non-empty values).',
      })
      return
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (>=0)',
      })
      return
    }

    const userData = {
      username: enteredName,
      age: enteredUserAge,
    }
    props.onSaveUserData(userData)
    usernameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className={styles['user-form']} onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={usernameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </>
  )
}

export default UserForm
