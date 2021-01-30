function validar(){

  const urlBase = "http://localhost:3000";

    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    

      return fetch(`${urlBase}/registerUser`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          nome: `${nome}`,
          email: `${email}`,
          senha: `${senha}`,
        }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        swal.showValidationError(`Request failed: ${error}`);
      })

      .then((result) => {
        swal({ validar: `${result.value.message}` });
      });
     
    
    
  }       
        
        
  