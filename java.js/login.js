//console.log('add to login page')
document.getElementById('btn').addEventListener('click',function(){
   // get number of the input
    const inputNum = document.getElementById('input-num');
    const contactNum = inputNum.value; 
   
    //get pin of the input
    const inputPin = document.getElementById('input-pin')
    const pin = inputPin.value;
    console.log(pin)
    //match number and pin
    if(contactNum=='00000000000' && pin=='0000'){
        alert('login successful')
        window.location.assign("/home.html");
    }
    else{
        alert('password or number error')
        return
    }
});