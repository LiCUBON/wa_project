const requesURL = 'http://localhost:3000/users';

function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        
        
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body));
        
    })
}

// sendRequest('GET', requesURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

let body = {
    name: "Sima",
    age:26
}

sendRequest('POST', requesURL, body)
.then(data => console.log(data))
.catch(err => console.log(err))