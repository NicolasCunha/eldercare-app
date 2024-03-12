//Third-party Imports
import { Button } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
//App Imports
import GoogleLoginController from "../controller/GoogleLoginController";
import './Home.css';

function Home() {

    const googleLoginController: GoogleLoginController = new GoogleLoginController();

    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: (data : Record<any, any>) => {
            googleLoginController.handleOnLoginSuccess(data).then(() => {
                navigate('/home');
                navigate(0);
            });
        },
        onError: googleLoginController.handleOnLoginError
    });

    return (
        <div className="mainDiv">
            <p>ElderCare junta cuidadores e pacientes.</p>
            <p>
                <Button>Criar minha conta</Button>
            </p>
            <p>
                <Button onClick={() => {
                    googleLogin();
                }}>
                    <Google />   Acessar com Google
                </Button>
            </p>
            <p><a className="smallerHrefButton" href="_blank">Já possui uma conta? Clique aqui para acessar.</a></p>
        </div>
    )
}

export default Home;