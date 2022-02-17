// universal function for income and expenses
function savingsBalance(balanceInputField) {
    const balanceFieldGet = document.getElementById(balanceInputField);
    const balanceFieldText = balanceFieldGet.value;
    const balanceField = parseFloat(balanceFieldText);
    // balanceFieldGet.value = '';
    return balanceField;
}
// calculate button work
document.getElementById('total-calculate').addEventListener('click', function () {
    
    // income field and function call
    const incomeField = savingsBalance('income-field');

    // Expenses field
    // food field and function call
    const foodExpenses = savingsBalance('food-expenses');
    // rent field and function call
    const rentExpenses = savingsBalance('rent-expenses');
    // clothes field and function call
    const clothesExpenses = savingsBalance('clothes-expenses');
    
    // food + rent + clothes = total expenses\
    const totalExpensesGet = document.getElementById('total-expenses');
    const totalExpensesSet = totalExpensesGet.innerText;
    if(incomeField < 0 || foodExpenses < 0 || rentExpenses < 0 || clothesExpenses < 0){
        alert("You entered negative value give positive value");
    }

    let totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    totalExpensesGet.innerText = totalExpenses;
    // balance remain after expenses
    if(incomeField > totalExpenses){
        const remainBalance = incomeField - totalExpenses;
        const balanceAfterExpensesGet = document.getElementById('total-balance');
        const balanceAfterExpensesSet = balanceAfterExpensesGet.innerText;
        balanceAfterExpensesGet.innerText = remainBalance;
        balanceAfterExpensesGet.style.color = '#0DCAF0';
    }
    else{
        const balanceAfterExpensesGet = document.getElementById('total-balance');
        const balanceAfterExpensesSet = balanceAfterExpensesGet.innerHTML;
        balanceAfterExpensesGet.innerHTML = "Your expenses too much"
        balanceAfterExpensesGet.style.color = 'red';
    }

});
// savings part
document.getElementById('savings-btn').addEventListener('click', function(){
    // saving input
    const savingPercentTextField = document.getElementById('savings-percent');
    const savingPercentText = savingPercentTextField.value;
    const savingPercent = parseFloat(savingPercentText);
    // function call
    const totalIncome = savingsBalance('income-field');
    // savings amount rule
    const savingAmount = (totalIncome * savingPercent) / 100;
    // savings Amount
    const savingsAmountGet = document.getElementById('savings-amount');
    const savingsAmountSet = savingsAmountGet.innerText;
    savingsAmountGet.innerText = savingAmount;
    // remaining balance
    const balanceAmountGet = document.getElementById('total-balance').innerText;
    
    const balanceAmountSet = parseFloat(balanceAmountGet);
    if(balanceAmountSet > savingAmount){
        const remainingBalanceAfterSave = balanceAmountSet - savingAmount;
        const remainingAmountPocketGet = document.getElementById('remaining-amount');
        const remainingAmountPocketText = remainingAmountPocketGet.innerText;
        remainingAmountPocketGet.innerText = remainingBalanceAfterSave;
        remainingAmountPocketGet.style.color = '#0DCAF0';
        savingsAmountGet.style.color = '#0DCAF0';
    }
    else{
        const savingsAmountSet = savingsAmountGet.innerHTML;
        savingsAmountGet.innerHTML = 'you already Expenses too much you dont have enough money';
        savingsAmountGet.style.color = 'red';
        const remainingAmountPocketGet = document.getElementById('remaining-amount');
        const remainingAmountPocketText = remainingAmountPocketGet.innerText;
        remainingAmountPocketGet.innerText = 0;
        remainingAmountPocketGet.style.color = 'red';
    }
});