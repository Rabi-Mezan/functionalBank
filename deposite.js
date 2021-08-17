// // deposite function handle
// const depositeButton = document.getElementById("deposite-btn").addEventListener('click', function () {
//     const depositeInput = document.getElementById('deposite-input');
//     const newDepositeAmmount = depositeInput.value;
//     const depositeTotal = document.getElementById('deposite-total');
//     const previousDepositeAmmount = depositeTotal.innerText;
//     const finalDepositeAmmount = parseFloat(previousDepositeAmmount) + parseFloat(newDepositeAmmount);
//     depositeTotal.innerText = finalDepositeAmmount;
//     depositeInput.value = '';

//     // balance update

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceAmmount = balanceTotal.innerText;
//     const finalBalanceAmmount = parseFloat(previousBalanceAmmount) + parseFloat(newDepositeAmmount);
//     balanceTotal.innerText = finalBalanceAmmount;
//     depositeInput.value = '';

// })

// // withdraw funcction handle

// document.getElementById('withdarw-btn').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const newWithDrawAmmount = parseFloat(withdrawInput.value);
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdarwAmmount = parseFloat(withdrawTotal.innerText);
//     const newWithDrawTotal = previousWithdarwAmmount + newWithDrawAmmount;
//     withdrawTotal.innerText = newWithDrawTotal;
//     withdrawInput.value = '';

//     // balance update

//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceAmmount = balanceTotal.innerText;
//     const finalBalanceAmmount = parseFloat(previousBalanceAmmount) - parseFloat(newWithDrawTotal);
//     balanceTotal.innerText = finalBalanceAmmount;
//     depositeInput.value = '';

// })
// ................................
// .................................................

// deposite button function
document.getElementById('deposite-btn').addEventListener('click', function
    () {
    const depositeInput = document.getElementById('deposite-input');
    const newDepostiteAmmount = parseFloat(depositeInput.value);
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmmount = parseFloat(depositeTotal.innerText);
    const finalDepositeAmmount = newDepostiteAmmount + previousDepositeAmmount;
    depositeTotal.innerText = finalDepositeAmmount;


    // balance update
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmmount = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceAmmount + newDepostiteAmmount;
    balanceTotal.innerText = newBalanceTotal;
    depositeInput.value = '';



})

// withdraw button handle

document.getElementById('withdarw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithDrawAmmount = parseFloat(withdrawInput.value);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdarwAmmount = parseFloat(withdrawTotal.innerText);
    const finalWithdarwAmmount = previousWithdarwAmmount + newWithDrawAmmount;
    withdrawTotal.innerText = finalWithdarwAmmount;


    // balance update

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmmount = parseFloat(balanceTotal.innerText);
    const finalBalanceAmmount = previousBalanceAmmount - newWithDrawAmmount;
    balanceTotal.innerText = finalBalanceAmmount;
    withdrawInput.value = '';


})


