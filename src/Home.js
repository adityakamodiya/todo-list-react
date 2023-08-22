import React, { useState } from 'react'
import "./todo.css"
function Home() {
    const [input,setinput] = useState('')
    const [para,setpara] = useState([])

  function getresult()
  {
    if(input){
      setpara([...para,input])
      setinput('')
      console.log(input)
    }
    else{
        alert('write something')
    }
  }
  function getremove(e,index){
    console.log('hello')
    setpara(para.filter((e,id) => id!=index))
  }
  function getedit(e,index){
    setinput(para.filter((e,id) => id==index ))
    setpara(para.filter((e,id) => id!=index))
    setedit()
    
  }


  function setedit(e,index){

  }
  return (
<>
<div id='wrapper'>
    <input placeholder='write...' value={input} onChange={(e)=>setinput(e.target.value)}></input>
    <button   onClick={getresult}>click</button>
    <div className='reult'>
       {
        para.map((res,index)=>{
            return(
            <>
            <div className='values' key={index}>
            <p>{res}</p>
            <button  onClick={(e)=>getremove(e,index)}>remove</button></div>
            <button  onClick={(e)=>getedit(e,index)}>EDIT</button>
            </>)

        })
       }
    </div>
</div>
</>
  )
}

export default Home
