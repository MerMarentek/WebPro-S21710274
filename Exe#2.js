let totalExpense = 0;
const account = {
    name: "Mercy",
    expenses: []

};

function addExpenses(description, amount) {
    account.expenses.push({description: description, amount: amount})
    
}
function getAccountSummary() {
    account.expenses.forEach(function(el) {
        totalExpense = totalExpense + el.amount
    })
    console.log("Total pengeluaran " + account.name + " adalah Rp." + account.totalExpense );
}
   

addExpenses('Beli Buku', 25000);
addExpenses('Ongkos', 30000);
getAccountSummary();

