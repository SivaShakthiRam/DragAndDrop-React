import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "react-bootstrap/Card"
import Table from './Table'
import "./Table.css"

import prof1 from "../src/profpic/prof1.jpg"
import prof2 from "../src/profpic/prof2.jpg"
import prof3 from "../src/profpic/prof3.jpg"
import prof4 from "../src/profpic/prof4.jpg"
import prof5 from "../src/profpic/prof5.png"
import prof6 from "../src/profpic/prof6.jpg"
import prof7 from "../src/profpic/prof7.jpg"
import prof8 from "../src/profpic/prof9.jpg"
import prof9 from "../src/profpic/prof9.jpg"



export function SortableItem(props){


    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
       
    }=
    useSortable({id:props.id})

    const style={
        transform: CSS.Transform.toString(transform),
        transition
    }


    return(
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>

            {/* <Card body className="m-3" > {props.id} </Card> */}
         
            {props.id}

           

               
   
   

        </div>
    )
}