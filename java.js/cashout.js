document.getElementById('withdraw').addEventListener('click',function(){
    // console.log('cliced')
    // alternative way
    //  const contactNum = getValueFromId('cash-agent-num');
    // console.log(contactNum)
    //get the agent number
    const agentNum = document.getElementById('cash-agent-num')
    const contact = agentNum.value ;
    
    console.log(contact);
    if(contact.length!=11){
        alert('this is invalid number');
        return ;
    }
    //get the main amount
    const mainAmount = document.getElementById('main-amount-nav')
    const maintaka = mainAmount.innerText;
    console.log(maintaka);
    //get the cash amount 
    const cashAmount = document.getElementById('cash-amount');
    const withdraw=cashAmount.value ;
    console.log(withdraw);
    //balance calculate 
    const newAmount=parseInt(maintaka) - Number(withdraw) ;
    if(newAmount<0){
        alert('insufficient fund');
        return ;
    }
    //get the pin
    const agentPass= document.getElementById('cash-agent-pass');
    const pin=agentPass.value;
    console.log(pin);
    if(pin=='0000'){
        alert('cash out successfully');
        console.log('new amount : ',newAmount);
       mainAmount.innerText = newAmount
       // add history of the cashout 
     //take the parent where transation will be add 
     const historyMain = document.getElementById('history-container');
     // make new div 
     const div = document.createElement('div')
     //add inner html
     
     div.innerHTML = `
         <div class="" >
         <img class="w-[60px] mb-2" src="assets/Logo-full.png" alt="">
          money is succuessfully cashout ${withdraw} and 
          new money ${newAmount} to date ${new Date}
         </div>
     `
     //add to history in main div
     historyMain.appendChild(div);
    }
    else{
        alert('wrong pin number');
        return;
    }
    
})