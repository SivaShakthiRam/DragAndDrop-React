

import prof1 from "../src/profpic/prof1.jpg"
import prof2 from "../src/profpic/prof2.jpg"
import prof3 from "../src/profpic/prof3.jpg"
import prof4 from "../src/profpic/prof4.jpg"
import prof5 from "../src/profpic/prof5.png"
import prof6 from "../src/profpic/prof6.jpg"
import prof7 from "../src/profpic/prof7.jpg"
import prof8 from "../src/profpic/prof8.jpg"
import prof9 from "../src/profpic/prof9.jpg"
import "./Table.css"


const Table2 = () => {




  return (


   
    <div className='tree'>
        <h1>Old list</h1>
      <ul>
        <li><a href='#'><img src={prof6} alt="" /><span>Rasmika</span></a>
        <ul>
       
        <li><a href='#'><img src={prof5} alt="" /><span>Darling</span></a>
        <ul>
         
        <li><a href='#'><img src={prof8} alt="" /><span>Megha</span></a></li>
        <li><a href='#'><img src={prof4} alt="" /><span>Meghan</span></a></li>
     
        </ul>
        </li>
        <li><a href='#'><img src={prof2} alt="" /><span>Mary</span></a>
       
        <ul>
        <li><a href='#'><img src={prof1} alt="" /><span>Ramesh Thilak</span></a></li>
        <li><a href='#'><img src={prof7} alt="" /><span>Malar kodi</span></a></li>
        <li><a href='#'><img src={prof3} alt="" /><span>Raju</span></a></li>
        </ul>
       


        </li>
        <li><a href='#'><img src={prof9} alt="" /><span>Nandhini</span></a></li>
        </ul>
        </li>
      </ul>


     
    </div>


 


  )
}


export default Table2