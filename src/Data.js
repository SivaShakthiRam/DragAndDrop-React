import React, { useState } from 'react'
import JSONDATA from "./MOCK_DATA.json"
import "./Data.css"

const Data = () => {

    const [searchTerm,setSearchTerm] = useState("")
   
  return (
    <div className='Data'>


  <h1 style={{"color":"white"}}>Employees list</h1>
 
        <input type='text' placeholder='Search name' onChange={event => setSearchTerm(event.target.value)}></input>
        {JSONDATA.filter((val)=>{
            if (searchTerm == ""){
                return val
                
            }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val,key)=>{

            return <div className='user' key={key}>
                <p style={{"color":"white"}}>{val.first_name}</p></div>

        })}

</div>
      
        
      

  )
}

export default Data
