import React, { useState } from "react";
import axios from "axios";
import { validateAdmin } from "../Dao";
import {fillDB} from "../dummyDB/fillDB";

export default function Login(props) {
    const [ password, setPassword ] = useState("");


    
    return <div>
        <p>Password:</p>
        <input onChange={e => setPassword(e.target.value)} value={password} placeholder={"password"} type={"password"} />
        <button onClick={() => validateAdmin(password, () => props.setPage("main"))}>Login</button>
        <button onClick={()=>fillDB()}>Fetch Data</button>

    </div>
}