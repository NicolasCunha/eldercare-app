import axios from "axios";

export default class GoogleLoginController {

    handleOnLoginSuccess(data : Record<any, any>) : Promise<void> {
        return axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${data.access_token}`, {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
                Accept: 'application/json'
            }
        }).then(response => {
            sessionStorage.setItem('userLogged', JSON.stringify(response.data));
        }).catch(error => {
            console.error('Error: ', error);
        });
    }

    handleOnLoginError() {
        console.error('Occurred an error during Google Login process.');
    }

}