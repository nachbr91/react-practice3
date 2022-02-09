import { useState } from 'react'

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
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} />
      <label>Age (Years)</label>
      <input type="number" onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm
