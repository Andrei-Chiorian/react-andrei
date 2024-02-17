import Dropdown from 'react-bootstrap/Dropdown';
import './NavDropdownButton.css'
import { useNavigate } from 'react-router-dom';
import { USERS_PATH } from '../../../constants/path';

function UserNavButton({username, onLogout}) {

    const navigate = useNavigate();

    const toProfile = () =>{
        navigate(USERS_PATH)
    } 
    return (    
        <Dropdown className='dropdown'>
        <Dropdown.Toggle variant="" id="dropdown-basic" className='userNavButton'>
            {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick ={() => toProfile()}>Perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => onLogout()}>Cerrar Sesion</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
  );
}

export default UserNavButton;