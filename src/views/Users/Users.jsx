import React, { useState, useEffect, lazy, useRef, useCallback } from "react";
import { get, post, del } from '../../services/requests'
import './Users.css';

const UserLazy = lazy(() => import("../../components/UserCard/UserCard"));

function Users() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        username: "",
        mail: "",
        password: ""
    })
    const [filter, setFilter] = useState("");
    
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
   
    const filterUsers = (users) => {
        return users.filter(user => {            
            if ( user.username.toLocaleLowerCase().startsWith(filter.toLowerCase())) {
                return (                
                    user.username.toLowerCase().startsWith(filter.toLowerCase())   
                )
            }
            
        })        
    }

    const handleChangeSearch = (event) => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        if (users.length === 0) {
            get('/users')
            .then(response => response.json())
            .then(data => {                
                setUsers(data);                               
            })                   
        }
    },[users]);

    

    const filteredUsers = filterUsers(users);

    const addUser = (newUser) => {
        if (!newUser) return;
        post('/users', newUser);
        setUsers([...users, newUser]);        
        usernameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";        
    }

    const deleteUser = useCallback((id) => {
        setUsers(users.filter((_user) => _user.id !== id));
        del("/users/", id);        
    }, [users]);
        
    const handleChangeUsername = (username) => {
        const _user = {...newUser};
        _user.username = username;
        setNewUser({..._user});
    }
    const handleChangeEmail = (mail) => {
        const _user = {...newUser};
        _user.mail = mail;
        setNewUser({..._user});
    }
    const handleChangePassword = (password) => {
        const _user = {...newUser};
        _user.password = password;
        setNewUser({..._user});
    }

    return (
        <>
            <h1>Users</h1>
            <div className="search-bar-container">                
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>  
                </div>              
                <input type="text" name="search-bar" className="search-bar" onChange={handleChangeSearch}/>
            </div>            
            <div className='users-container'>                           
                <div className="user" key={"0"}>
                    <div className='img-container'>
                        <img src = "logo192.png" alt="" />
                    </div>
                    <div className='user-info-container-new'>
                        <input ref={usernameRef} type="text" name="username" id="username-input" onChange={(e) => handleChangeUsername(e.target.value)} placeholder="Nombre de usuario"/>
                        <input ref={emailRef} type="text" name="email" id="email-input" onChange={(e) => handleChangeEmail(e.target.value)} placeholder="Email"/>
                        <input ref={passwordRef} type="text" name="password" id="password-input" onChange={(e) => handleChangePassword(e.target.value)} placeholder="Contraseña"/>                                       
                    </div>
                    <div className='user-bnt-container'>
                        <button className='add-btn' onClick={(e) => addUser(newUser)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>                                       
                    </div>                
                </div>           
                            
                {
                filteredUsers.map((user) => {
                    return (
                        <UserLazy key={user.id} user={user} onDelete={deleteUser}/>
                    )
                })
                }
            </div>

        </>

    );
}

export default Users;