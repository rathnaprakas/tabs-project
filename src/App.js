// import data from './data';
import {useState,useRef,useEffect} from 'react';

import './index.css';

let url='https://course-api.com/react-tabs-project'


function App() {
  let [data,setData]=useState([])
  let [loading,setLoading]=useState(true)
  let fetchData=async ()=>{
    let response=await fetch(url)
    let data1=await response.json()
    setData(data1)
    setLoading(false)
  }
  useEffect(()=>{fetchData()},[])
  let [s,setS]=useState(0);
  let inputIndex=useRef(0)
  console.log(inputIndex.current)
  let clickHandler=(e)=>{
    e.preventDefault()
    setS(data.length-inputIndex.current)
  }

  if(loading){return <div>Loading...</div>}
  return (
    <div className='section'>
      <div className='jobs-center'>
      <nav className='btn-container'>
        {data.map(i=><button className='job-btn' onClick={clickHandler} value={i.order} onClickCapture={()=>{inputIndex.current=i.order}} key={i.order}>{i.company}</button>)}
      </nav>
      <div className='job-info'><h3>{data[s].title}</h3>
      <h4>{data[s].company}</h4>
      <p>{data[s].dates}</p>
      <ul>
        {data[s].duties.map((j)=><li className='job-desc' key={j}>{j}</li>)}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
