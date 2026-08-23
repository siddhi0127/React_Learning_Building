import {useState} from "react";

function Form_creation(){

    const [name,setName]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                   value={name} 
                   onChange={(e)=>setName(e.target.value)}/>

            <button type="submit">submit form</button>

        </form>
        </>
    );
}

export { Form_creation};
