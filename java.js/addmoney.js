document.getElementById('add-money').addEventListener('click',function(){
    //console.log('clicked add money')
    //take the selected bank
    const selectBank=getValueFromId('select-bank');
    //console.log('selected button',selectBank)
    if(selectBank=='Select a bank'){
        alert('Add a bank');
        return;
    }
    //take account number
    const accountNo = getValueFromId('add-agent-num')
    if(accountNo.length != 11){
        alert('Enter a 11 digit account number');
        return;
    }
    //console.log('account no ',accountNo);
    //add amount of money
    const addMoney=getValueFromId('add-amount')
    //console.log('add money',addMoney);
    //new money calculation
    const newMoney = add(getMoney(),addMoney);
    //add pin number
    const pin =getValueFromId('add-agent-pass')
    //console.log('add pin ',pin)
    if(pin=='0000'){
        alert('money add succesfully');
        setMoney(newMoney)
        // add history of the transaction 
     //take the parent where transation will be add 
     const historyMain = document.getElementById('history-container');
     // make new div 
     const div = document.createElement('div')
     //add inner html
     
     div.innerHTML = `
         <div class="" >
         <img class="w-[60px] mb-2" src="assets/Logo-full.png" alt="">
          money is succuessfully add ${newMoney} from 
         account num ${accountNo} to date ${new Date}
         </div>
     `
     //add to history in main div
     historyMain.appendChild(div);
    }
    else{
        alert('pin is incurrect');
        return;
    }
})