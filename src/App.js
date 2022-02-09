import { useState } from 'react'

import UserForm from './components/UserForm/UserForm'
// import UserList from './components/UserList/UserList'

function App() {
  const [userData, setUserData] = useState([])

  const addUserData = (data) => {
    setUserData(data)
  }
  console.log(userData)

  return (
    <div>
      <UserForm onSaveUserData={addUserData} />
      {/* <UserList items={userData} /> */}
    </div>
  )
}

export default App
