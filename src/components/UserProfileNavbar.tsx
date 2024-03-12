// Third-party imports
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { redirect } from 'react-router-dom';
import React from 'react';

function UserProfileNavbar() {

    const [, forceUpdate] = React.useReducer(x => x + 1, 0);

    const logoutOnClick : any = () => {
        sessionStorage.removeItem('userLogged');
        forceUpdate();
        redirect("/home");        
    }

    if (sessionStorage.getItem('userLogged') == null) {
        return (
            <Navbar.Text>
                Acesse o sistema clicando <a href="/home">aqui</a>.
            </Navbar.Text>
        )
    }

    const storageData: any = sessionStorage.getItem('userLogged');
    const storageDataAsString: string = String(storageData);
    const parsedJson: Record<any, any> = JSON.parse(storageDataAsString);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image src={parsedJson.picture} roundedCircle={true} style={{
            paddingRight: '10px'
            }} />
        <NavDropdown title={`Olá, ${parsedJson.name}`}>
            <NavDropdown.Item>Meu Perfil</NavDropdown.Item>
            <NavDropdown.Item onClick={logoutOnClick}>Sair</NavDropdown.Item>
        </NavDropdown>
        </div>
    );
}
export default UserProfileNavbar;
