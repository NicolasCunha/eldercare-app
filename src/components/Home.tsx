import { Button } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";

import './Home.css';

function Home() {
    return (
        <div className="mainDiv">
            {/*
                Overview explaining the app.
            */}
            <p>ElderCare junta cuidadores e pacientes.</p>
            {/*
                Ask user to sign up
                This should be a bigger button.
            */}
            <p>
                <Button>Criar minha conta</Button>
            </p>
            <p>
                <Button><Google/>   Acessar com Google</Button>
            </p>            
            
            {/*
                Smaller href if the user already has account.
            */}
            <p><a className="smallerHrefButton" href="_blank">Já possui uma conta? Clique aqui para acessar.</a></p>
        </div>
    )
}

export default Home;