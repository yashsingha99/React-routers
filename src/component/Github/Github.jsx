import {useEffect, useState} from 'react'
import './github.css'
function Github() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/yashsingha99')
    .then(res=>res.json())
    .then(data1 => {setData(data1)})
  },[])
  return (
    <div className='github'> 
    <div className="img">
    <img src="https://avatars.githubusercontent.com/u/122280082?v=4"/>
    </div>
    <div className="personalInfo">
      <div className="name">Name :- {data.name}</div> 
      <div className="following">Following :- {data.following}</div>
    </div>
    </div>
  )
}

export default Github