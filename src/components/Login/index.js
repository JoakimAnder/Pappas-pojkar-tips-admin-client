import React, { useState } from "react";
import { validateAdmin } from "../Dao";
import useInput from "../../hooks/useInput";

export default function Login(props) {
    const [ password, setPassword ] = useState("");

    return <div>
        <p>Password:</p>
        <input onChange={e => setPassword(e.target.value)} value={password} placeholder={"password"} type={"password"} />
        <button onClick={() => validateAdmin(password, () => props.setPage("main"))}>Login</button>


    </div>
}