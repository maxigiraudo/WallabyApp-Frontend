import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { createAcount, login, postLogin } from "../../redux/actions";
import { useEffect } from "react";
import { register } from "../../redux/actions";

// const navigate = useNavigate();

// import { logoutExistoso, logoutRechazado} from './controller';

function logoutExistoso() {
  console.log("Se deslogueo exitosamente");
}
function logoutRechazado(data) {
  console.log(data, "esta fallando algo");
}

const GoogleBtn = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          // "316483334585-pute8sjjkgj3mkom5ohlkijkdugiecoo.apps.googleusercontent.com",
        // clientId:
          "446175834469-vo2cgbsrab6a8444kd213loj477hd85g.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Estado para verificar si esta logueado o no, renderice tales botones.
  const [logined, setLogined] = useState(false);

  // funcion que recibe los datos del usuario que se logueo con google y los manda a DB
  function respuestaGoogle(data) {
    if (data.profileObj) {
      const { email, familyName, googleId, imageUrl, name } = data.profileObj; //profileObj contiene la info del usuario
      dispatch(
        register({
          email: email,
          // password:"henrynfT@",
          password: familyName + name.length + "A@",

          fullName: name,
          profile_pic: imageUrl,
          googleId: googleId,
        })
      );
      navigate("/home");
      return console.log("Acceso con googlee existoso", data.profileObj);
    }
    return console.log("Error al acceder con google");
  }

  // function onclick() {
  //     dispatch(register())
  // }
  return (
    <>
      <GoogleLogin
        // className={styles.google}
        clientId="316483334585-pute8sjjkgj3mkom5ohlkijkdugiecoo.apps.googleusercontent.com"
        // clientId="446175834469-vo2cgbsrab6a8444kd213loj477hd85g.apps.googleusercontent.com"
        buttonText="Login with Google"
        // onclick={()=> onclick()}
        onSuccess={(data) => {
          respuestaGoogle(data);
          setLogined(true);
        }}
        onFailure={respuestaGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default GoogleBtn;
