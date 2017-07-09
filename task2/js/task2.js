var eu = Number(prompt("Please enter value in euros", ""));
var dol = Number(prompt("Please enter value in dollars", ""));
var grneu = eu * 29.74 ;
var grndol = dol * 26.08 ;
var doleu = 1.14 ;
alert(`${eu} euros are equal ${grneu} UAH, ${dol} dollars are equal ${grndol} UAH, one euro is equal ${doleu} dollars`);
