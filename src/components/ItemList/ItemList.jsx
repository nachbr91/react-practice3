import styles from './ItemList.module.css'

const ItemList = (props) => {
  const { username, age } = props

  return (
    <li className={styles['user-item']}>{`${username} (${age} years old)`}</li>
  )
}

export default ItemList
