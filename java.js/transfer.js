document.getElementById('send-now').addEventListener('click',function(){
    //console.log('clicked by sent now button');
    //take user account number 
    const userAccNum = getValueFromId('transfer-num');
    if(userAccNum.length!=11){
        alert('Enter correct account number')
        return;
    }
    //take amount which is trasfer 
    const amount=getValueFromId('transfer-amount')
     if(amount<0 || getMoney()<amount){
        alert('invalid amount');
        return;
     }
     //money calculation
     let p = 0; 
     const newMoney = sub(getMoney(),amount);
     
    //take pin of user 
    
    const pin = getValueFromId('transfer-pass');
    if(pin=='0000'){
         
        alert(`transfer success full .
            new balance ${newMoney} at time ${new Date}`);
            setMoney(newMoney);    
          // add history of the transaction 
     //take the parent where transation will be add 
     const historyMain = document.getElementById('history-container');
     // make new div 
     const div = document.createElement('div')
     //add inner html
     
     div.innerHTML = `
         <div class="" >
         <img class="w-[60px] mb-2" src="assets/Logo-full.png" alt="">
          money is succuessfully transfer ${amount} from 
         account num ${userAccNum} to date ${new Date}
         </div>
     `
     //add to history in main div
     historyMain.appendChild(div);
    }
    else{
        alert('wrong pin')
        return;
    }
    
});