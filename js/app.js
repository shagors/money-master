function savingsBalance(balanceInputField) {
    const incomeFieldGet = document.getElementById(balanceInputField);
    const incomeFieldText = incomeFieldGet.value;
    const incomeField = parseFloat(incomeFieldText);
    return incomeField;
}


// calculate button work

document.getElementById('total-calculate').addEventListener('click', function () {

    // income field
    // const incomeFieldGet = document.getElementById('income-field');
    // const incomeFieldText = incomeFieldGet.value;
    // const incomeField = parseFloat(incomeFieldText);
    savingsBalance('income-field');


    // Expenses field

    // food
    const foodCostFieldGet = document.getElementById('food-expenses');
    const foodCostFieldText = foodCostFieldGet.value;
    const foodCostField = parseFloat(foodCostFieldText);

    // rent 
    const rentCostFieldGet = document.getElementById('rent-expenses');
    const rentCostFieldText = rentCostFieldGet.value;
    const rentCostField = parseFloat(rentCostFieldText);

    // clothes
    const clothesCostFieldGet = document.getElementById('clothes-expenses');
    const clothesCostFieldText = clothesCostFieldGet.value;
    const clothesCostField = parseFloat(clothesCostFieldText);

    // food + rent + clothes = total expenses\
    const totalExpensesGet = document.getElementById('total-expenses');
    const totalExpensesSet = totalExpensesGet.innerText;

    let totalExpenses = foodCostField + rentCostField + clothesCostField;
    totalExpensesGet.innerText = totalExpenses;

    // balance remain after expenses
    const remainBalance = savingsBalance('income-field') - totalExpenses;
    
    const balanceAfterExpensesGet = document.getElementById('total-balance');
    const balanceAfterExpensesSet = balanceAfterExpensesGet.innerText;
    balanceAfterExpensesGet.innerText = remainBalance;


});