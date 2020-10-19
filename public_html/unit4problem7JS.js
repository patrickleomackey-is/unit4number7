/* Patrick Mackey CIS 119 Prof. K. Miller unit4problem7*/
let dailySales = [];
let salesTotal = 0;
for (let i = 0; i <= 6;i++){
 dailySales.push(Number(prompt("Enter the daily sales total:")));   
salesTotal += dailySales[i];
}
document.write("$"+  salesTotal.toFixed(2) + " is this weeks total sales");
/*This is a commment*/