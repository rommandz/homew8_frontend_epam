var a = Number(prompt("Enter variable a", ""));
var b = Number(prompt("Enter variable b", ""));
var c = Number(prompt("Enter variable c", ""));
var d, res1, res2;
d = Math.sqrt(b*b - 4*a*c);
res1 = (-b + d) / (2*a) ;
res2 = (-b - d) / (2*a) ;
console.log(`Рівняння ${a}x^2 + ${b}x + ${c} = 0 має два розв'язки: x1 = ${res1}, x2 = ${res2}`);
