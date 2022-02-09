import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <ul className={styles['user-list']}>
      {props.items.map((user) => (
        <li>{`${user.username} (${user.age} years old)`}</li>
      ))}
    </ul>
  )
}

export default UserList
