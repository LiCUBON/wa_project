document.getElementById('reverser').addEventListener('click', ()=>{
    let value = document.querySelectorAll('input')[0]
    let value2 = document.querySelectorAll('input')[1]
    let value3 = value.value;
    value.value = value2.value
    value2.value = value3
    
    
   
})