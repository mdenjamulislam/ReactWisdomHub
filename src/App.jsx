import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import User from './components/Users/User';
import Blogs from './components/Blogs/Blogs';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  // User data
  const [user, setUser] = useState([]);

  // Fetch user data
  useEffect(() => {
    fetch('user.json')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <>
      <div className='container relative' data-theme="dark">
        <Header user = {user}></Header>
        <div className='grid grid-cols-12 gap-3 w-full md:h-[100vh] pt-16'>
          <User user = {user}></User>
          <Blogs></Blogs>
          <Sidebar></Sidebar>
        </div>
      </div>
      
      {/* <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
