import { useState } from 'react'

import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'

const App = () => {
  const [userData, setUserData] = useState([])
  const [isUserList, setIsUserList] = useState(false)

  const addUserData = (data) => {
    setUserData((prevData) => {
      return [data, ...prevData]
    })
    setIsUserList(true)
  }

  return (
    <>
      <UserForm onSaveUserData={addUserData} />
      {isUserList && <UserList items={userData} />}
    </>
  )
}

export default App
