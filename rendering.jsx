import {useState} from "react";
function Login(){
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    return(
        <>
        {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login / Logout</button>
        </>
    );
}

function Rendering_Lists_Map(){
const students=["Siddhi","Girish","Vasanti","Divya"];
return(
<>
{students.map((student) => (
    <p key={student}>{student}</p>
))}
</>
);
}
export {Rendering_Lists_Map, Login};
