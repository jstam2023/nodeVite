
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState("")
  const [responseMsg, setResponseMsg] = useState("")

  //Get request to fetch data
const fetchMessage = async () => {
  try {
    const response = await fetch("http://localhost:5050/api/message")
    const data = await response.json()
    if (data) {
      setMessage(data.message)
    }
  } catch (error) {
    console.log(error);
  }
};

// POST request to send data
const sendMessage = async()=> {
  try {
    console.log(name)

    const response = await fetch("http://localhost:5050/api/message", {
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({name: name})
    });

    const data = await response.json()
    if(data) {
      setResponseMsg(data.message)
    }

  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className='main'>
      <div>
        <h2>GET Request</h2>
        <button
        onClick={fetchMessage}
        >Get Message from Backend</button>
        <p>{message}</p>
      </div>

       <div>
        <h2>POST Request</h2>
        <div>
          <input 
          type="text"
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />{' '}
          <button
          onClick={sendMessage}>Send Name to Backend</button>
        </div>
        <p>{responseMsg}</p>
      </div>
    </div>
  )
}

export default App








