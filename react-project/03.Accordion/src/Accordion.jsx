 import {
     useState
 } from "react";
 import Data from "./Data"

 const Accordion = () => {



         const [selected, setSelected] = useState(null)
         const handleSelection = (currentId) => {
             console.log(currentId)
             setSelected(currentId === selected? null : currentId)
         }
         return ( <
             div className = "wrapper" >
             <
             div className = "accordion" > {
                 Data && Data.length > 0 ? Data.map((item) => ( < div className = "item"
                     onClick = {
                         () => handleSelection(item.id)
                     }
                     key = {item.id} > 
                     < div className = "title" >
                      <h3> {  item.question } </h3>
                     <span>+</span >
                      </div>
                      {
                        selected === item.id ? <div className="content">
                            {item.answer}
                        </div>: null
                      }
                       </div > )) : 
                     <div > Data Not Found </div>} 
                     </div>

                     </div>
             );
         }
         export default Accordion