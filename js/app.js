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

    // income field
    const incomeField = savingsBalance('income-field');

    // Expenses field

    // food
    const foodExpenses = savingsBalance('food-expenses');

    // rent 
    const rentExpenses = savingsBalance('rent-expenses');

    // clothes
    const clothesExpenses = savingsBalance('clothes-expenses');

    // food + rent + clothes = total expenses\
    const totalExpensesGet = document.getElementById('total-expenses');
    const totalExpensesSet = totalExpensesGet.innerText;

    let totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    totalExpensesGet.innerText = totalExpenses;

    // balance remain after expenses
    const remainBalance = incomeField - totalExpenses;
    
    const balanceAfterExpensesGet = document.getElementById('total-balance');
    const balanceAfterExpensesSet = balanceAfterExpensesGet.innerText;
    balanceAfterExpensesGet.innerText = remainBalance;

});

// savings part
document.getElementById('savings-btn').addEventListener('click', function(){
    // saving input
    const savingPercentTextField = document.getElementById('savings-percent');
    const savingPercentText = savingPercentTextField.value;
    const savingPercent = parseFloat(savingPercentText);

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
    
    const remainingBalanceAfterSave = balanceAmountSet - savingAmount;
    
    const remainingAmountPocketGet = document.getElementById('remaining-amount');
    const remainingAmountPocketText = remainingAmountPocketGet.innerText;
    remainingAmountPocketGet.innerText = remainingBalanceAfterSave;

});