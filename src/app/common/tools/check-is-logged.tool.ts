import { AuthenticationService } from "src/app/services/authentication/authentication.service";

export function checkLogged(auth:AuthenticationService): boolean {


  let logged=true;
  //let logged = !sessionStorage.getItem("logged")  || sessionStorage.getItem("logged")=="false" ? false :  true;

  return logged;
}
