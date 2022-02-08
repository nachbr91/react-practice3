// import { useState } from 'react'
import Button from '../UI/Button'

import styles from './UserForm.module.css'

const UserForm = () => {
  return (
    <form className={styles['user-form']}>
      <label>Username</label>
      <input type="text" />
      <label>Age (Years)</label>
      <input type="number" />
      <Button />
    </form>
  )
}

export default UserForm
