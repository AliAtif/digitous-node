import { useState } from "react";


const AddForm =()=>{
    const [name, setName] = useState("");
    
    const add = () => {
        
      fetch("http://localhost:8000/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        
        }),
      });
    };

    return(
        <>
        <h1>Ajouter Student</h1>
         <input type="text" placeholder="Name"  value={name} onChange={(event) =>
             { setName(event.target.value);}}></input>
        <button onClick={add}>Ajouter</button>
       
        </>
    )
}

export default AddForm;