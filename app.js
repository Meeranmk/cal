import './App.css';
import React,{ useState,useEffect } from "react";

const MyNewApp = () => { 
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [operations, setOperations] = useState('+')
    const [result, setResult] = useState(0);

    const handleSumbit =() => {
         if(operations === "+"){
            setResult(parseInt(valueA)+parseInt(valueB));
         }
         if(operations === "-") {
            setResult(valueA-valueB);
         }
         if(operations === "*") {
            setResult(valueA*valueB)
         }
         if(operations === "/") {
            setResult(valueA/valueB)
         }
    }

    return (
        <div>
            <div> 
              <h3>Simple Calculator in React js</h3> <br/>
            </div>
            <h3>Result : {result }</h3> <br/>
            <div>
                 <input type="text" value={valueA} onChange={(e)=>setValueA(e.target.value)}/><br/>
                 <input type="text" value={valueB} onChange={(e)=>setValueB(e.target.value)}/><br/>
                 <button onClick={handleSumbit}>Sumbit</button>
            </div>
          <div>
               <button onClick={()=>setOperations("+")}>+</button>
               <button onClick={()=>setOperations("-")}>-</button>
               <button onClick={()=>setOperations("*")}>*</button>
               <button onClick={()=>setOperations("/")}>/</button>
          </div>
        </div>


    )
    
}

export default MyNewApp
