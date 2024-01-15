import React, {useState, useRef} from 'react'
import './UserCard.css'


function UserCard({user, onDelete, onUpdate}) {
    
    const updateUsernameRef = useRef(null);
    const updateEmailRef = useRef(null);

    const [clicked, setClicked] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({
        id: user.id,
        username: user.username,
        mail: user.mail        
    })    

    
    const handleClick = () => {
        setClicked(!clicked);         
    }

    const handleUpdateUser = () => {
        setClicked(!clicked);              
        onUpdate(updatedUser)         
    }

    const handleChangeUpdatedUsername = (username) => {
        const _user = {...updatedUser};
        _user.username = username;
        setUpdatedUser({..._user});
    }
    const handleChangeUpdatedEmail = (mail) => {
        const _user = {...updatedUser};
        _user.mail = mail;
        setUpdatedUser({..._user});
    }    

    return (
        <div className="user">
            <div className='img-container'>
                <img src = "perfil.png" alt="" />
            </div>
            <div className='user-info-container'>
                <div className='input-group'>
                    <input ref={updateUsernameRef} type="text" name={"updateUsername" + user.id} id={"update-username-input" + user.id} onChange={(e) => handleChangeUpdatedUsername(e.target.value)} defaultValue={user.username} readOnly={clicked ? false : true} className='update-username-input  card-input'/>                   
                </div>
                <div className='input-group'>
                    <input ref={updateEmailRef} type="text" name={"updateEmail" + user.id} id={"update-email-input" + user.id} onChange={(e) => handleChangeUpdatedEmail(e.target.value)}  defaultValue={user.mail} readOnly={clicked ? false : true} className='update-email-input card-input'/>                    
                </div>                                        
            </div>
            <div className='user-bnt-container'>
                <button className='add-btn' onClick={() => {
                !clicked 
                ?handleClick()
                :handleUpdateUser()
                }} >
                    {
                    !clicked
                    ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>                  
                    }   
                </button>

                <button className='del-btn' onClick={() => onDelete(user.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>                
            </div>
            
        </div>
    );
  }

export default UserCard;