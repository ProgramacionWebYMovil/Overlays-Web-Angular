export function checkLogged(): boolean {
  let logged = sessionStorage.getItem("logged") || sessionStorage.getItem("logged")=="false" ? false :  true;

  return logged;
}
