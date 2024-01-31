import  { useEffect, useState } from 'react'
import  axios  from 'axios'


const Dashboard = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/getusers')
    .then(gymclients => setUsers(gymclients.data))
    .catch(err => console.log(err))

  },[])
  return (
    <div>
     <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            email
          </th>
          <th>
            password
          </th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user =>{
            
            return  <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>

          })
        }
      </tbody>
     </table>
    </div>
    
  )
}

export default Dashboard
