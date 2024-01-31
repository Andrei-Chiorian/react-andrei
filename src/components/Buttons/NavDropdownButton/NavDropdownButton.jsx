import Dropdown from 'react-bootstrap/Dropdown';
import './NavDropdownButton.css'

function UserNavButton({username, onLogout}) {
    return (    
        <Dropdown className='dropdown'>
        <Dropdown.Toggle variant="" id="dropdown-basic" className='userNavButton'>
            {username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/users">Perfil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => onLogout()}>Cerrar Sesion</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
  );
}

export default UserNavButton;