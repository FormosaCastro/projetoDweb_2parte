function validaUser(){

  const urlBase = "http://localhost:3000";

  const par = document.getElementById("loginResult");
  const nome = document.getElementById("nome");
  const senha = document.getElementById("senha");
  
    
  
  return fetch(`${urlBase}/loginUser`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
    body: `nome=${user}&senha=${pass}`,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch((error) => {
    validaUser.showValidationError(`Pedido falhado: ${error}`);
  });
  
}