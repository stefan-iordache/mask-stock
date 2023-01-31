import React, { useRef } from 'react';


export function Login2({handleClick,data}) {

    const usernameRef = useRef();
    const passwordRef = useRef()


    return (
        <>
            <p>Username:</p>
            <input className="user-name" ref={usernameRef}></input>
            <p>Password:</p>
            <input type="password" className="password" ref={passwordRef}></input>
            <button onClick={()=>{handleClick(usernameRef.current.value,passwordRef.current.value)}}>Submit</button>
            <div>
                {data ? <p>{data.message}</p> : <p>Loading...</p>}
            </div>
        </>
    );
}