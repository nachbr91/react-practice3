import ItemList from '../ItemList/ItemList'

import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <ul className={styles['user-list']}>
      {props.users.map((user) => (
        <ItemList
          username={user.username}
          age={user.age}
          key={Math.random().toString()}
        />
      ))}
    </ul>
  )
}

export default UserList
