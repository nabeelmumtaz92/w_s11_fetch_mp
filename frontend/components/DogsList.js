import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DogsList({ dogs, getDogs, setCurrentDog}) {
  const navigate = useNavigate()
  const editDog = id => {
    console.log ('editing...', id)
    //set that id as the current id 
    // navigate to the form 
  }

  const deleteDog = id => {
    console.log ('deleting...')
    fetch('/api/dogs/${id}', {method : 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error ('Problem DELETing')
        getDogs()
        setCurrentDog(null)
        })
        .catch(err => console.error(err))
  }
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
        {
          dogs.map(dog => (
            <li key = {dog.id}>
              {dog.name}, {dog.breed}, {dog.adopted ? '': 'NOT' }
              <div>
                <button onClick = {() => editDog (dog.id)}> Edit </button>
                <button onClick = {() => deleteDog(dog.id)}> Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
