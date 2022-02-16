// universal function for income and expenses

function savingsBalance(balanceInputField) {
    const balanceFieldGet = document.getElementById(balanceInputField);
    const balanceFieldText = balanceFieldGet.value;
    const balanceField = parseFloat(balanceFieldText);
    balanceFieldGet.value = '';
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