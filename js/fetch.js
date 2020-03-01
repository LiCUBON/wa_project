const requestURL = 'http://localhost:3000/users';

function sendRequest(method, url, body = null) {
    const headers = {
      'Content-Type': 'application/json'
    }
  
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
  
      return response.json().then(error => {
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
      })
    })
  }
  
  


  buttReg.onclick = () => { 
    const body = {
        login: document.getElementById("inp_registr").value,
        name: document.getElementById("inp_name").value,
        password: document.getElementById("input_pass").value
    }
    sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))
  
}
  

buttAuth.onclick = (form) =>{
    function sendRequest(method, url, body = null){
        return fetch(url).then(response => {
            return response.json()
        })
    }

    sendRequest('GET', requestURL)
        .then(data => console.log(data))
        .catch(err => console.log(err))
        
        
    }
    