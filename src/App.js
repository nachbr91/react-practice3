import { useState } from 'react'

import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'

const App = () => {
  const [userData, setUserData] = useState([])
  const [isUserList, setIsUserList] = useState(false)

  const addUserData = (data) => {
    setUserData((prevData) => {
      return [...prevData, data]
    })
    setIsUserList(true)
  }

  return (
    <>
      <UserForm onSaveUserData={addUserData} />
      {isUserList && <UserList users={userData} />}
    </>
  )
}

export default App
