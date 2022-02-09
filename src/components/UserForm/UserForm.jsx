import { useState } from 'react'

import Button from '../UI/Button'
import styles from './UserForm.module.css'

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge.length === 0) {
      setEnteredUsername('')
      setEnteredAge('')
      return
    } else if (enteredAge < 0) {
      setEnteredAge('')
      return
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    }

    props.onSaveUserData(userData)
    setEnteredUsername('')
    setEnteredAge('')
  }

  return (
    <form className={styles['user-form']} onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        value={enteredAge}
        onChange={ageChangeHandler}
      />
      <Button type="submit">Add User</Button>
    </form>
  )
}

export default UserForm
