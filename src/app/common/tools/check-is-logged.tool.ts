export function checkLogged(): boolean {
  let logged = sessionStorage.getItem("logged")==="true" ? true :  false;
  return logged;
}
