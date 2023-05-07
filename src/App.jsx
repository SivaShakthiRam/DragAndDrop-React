

import React from 'react'
import { useState } from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import {
      DndContext,
      closestCenter
} from "@dnd-kit/core"
import prof1 from "../src/profpic/prof1.jpg"


import {
arrayMove,
SortableContext,
verticalListSortingStrategy
} from "@dnd-kit/sortable"

import { SortableItem } from './SortableItem'

import Table from './Table'
import "./Table.css"
import { Tab } from 'bootstrap'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import Child5 from './Child5'
import Child6 from './Child6'
import Child7 from './Child7'
import Child8 from './Child8'
import Child9 from './Child9'



import prof2 from "../src/profpic/prof2.jpg"
import prof3 from "../src/profpic/prof3.jpg"
import prof4 from "../src/profpic/prof4.jpg"
import prof5 from "../src/profpic/prof5.png"
import prof6 from "../src/profpic/prof6.jpg"
import prof7 from "../src/profpic/prof7.jpg"
import prof8 from "../src/profpic/prof9.jpg"
import prof9 from "../src/profpic/prof9.jpg"
import Table2 from './Table2'
import Title from './Title'
import Data from './Data'




const App = () => {


  const [languages1,setLanguages1] = useState([<Title></Title>,<Table></Table>,<Child1></Child1>,<Child2></Child2>,<Child3></Child3>,
  <Child4></Child4>,<Child5></Child5>,<Child6></Child6>,
  <Child7></Child7>,<Child8></Child8>,<Child9></Child9>,<Table2></Table2>])



  

  return (


   
    
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    
    >




      


<Container className='p-3' style={{"width":"100%" }}  align="center">



<div className='sidenav'>

<Data className="data"></Data>

</div>
<h3>All employee profiles</h3>




      





{/* part1 */}

     
      

<SortableContext

items={languages1}
strategy={verticalListSortingStrategy}
>
   


          
           {languages1.map(languages1=> <SortableItem key={languages1} id={languages1}>

       

</SortableItem>)}

</SortableContext>


{/* part2 */}



   



         {/* part3 */}


     




      


{/* 

<SortableContext

items={languages1}
strategy={verticalListSortingStrategy}
> */}


     



{/* {languages1.map(languages1=> <SortableItem key={languages1} id={languages1}>




  
</SortableItem>)} */}
{/* we need components that use usesortable hook */}


{/* 
</SortableContext> */}



</Container>



    </DndContext>
  
  )



  // part1 function
  function handleDragEnd(event){
    console.log("drag and called")
    const {active,over}=event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER: " + over.id)


    


    if(active.id !== over.id){
      setLanguages1((items)=>{
        const activeIndex = items.indexOf(active.id);
        const overIndex= items.indexOf(over.id);
        console.log(arrayMove(items,activeIndex,overIndex));


       return arrayMove(items,activeIndex,overIndex)
      })

    }
    
  }









 


 

    
    
  }


export default App
