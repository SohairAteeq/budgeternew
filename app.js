var budget2;
var expense;
var exp;
var total;
function budget(){
    var budget = document.getElementById("budget").value;
    budget2 = budget;
    console.group(budget2)
    // exp = document.getElementById("newBudget").value;
    // console.log(exp)
}
// function check(){
//     expense = document.getElementById("expense").value;
//     var des = document.getElementById("des").value;
//     var date = document.getElementById("usdate").value;

//     var desc = document.createElement("span")
//     desc.innerHTML = des + " ";
//     document.body.appendChild(desc);
    
//     var btn = document.createElement("span");
//     btn.innerHTML = expense + " ";
//     document.body.appendChild(btn);

//     var dates = document.createElement("div");
//     dates.innerHTML = date + " ";
//     document.body.appendChild(dates);

//     exp = document.getElementById("newBudget").value;
//     // console.log(exp)

//     var ded = budget2 - expense;
//     console.log(budget2);
//     document.getElementById("newBudget").innerHTML = ded;
//     let a = document.getElementById("expense").value;
//     console.log(a);
//     let b = document.getElementById("budget").value;
    
//     ded = ded - a;
//     console.log(ded)
//     // document.querySelector("#newBudget").innerHTML = total;
    

// }

    
//     // document.querySelector("#mybtn").onclick = function(){
//     // const newBudget = document.querySelector("#budget");
//     // newBudget.innerHTML = ded;
//     // console.log(newBudget);
// // }


function check(){
    expense = document.getElementById("expense").value;
    var des = document.getElementById("des").value;
    var date = document.getElementById("usdate").value;
    var paydat = document.getElementById("paydate").value;


    var desc = document.createElement("span")
    desc.innerHTML = des + " ";
    document.body.appendChild(desc);

    var dates = document.createElement("span");
    dates.innerHTML = date + " ";
    document.body.appendChild(dates);

    var btn = document.createElement("span");
    btn.innerHTML = expense + " ";
    document.body.appendChild(btn);

    var paydate = document.createElement("span");
    paydate.innerHTML = paydat + "<br>";
    document.body.appendChild(paydate);

    
    
    console.log(expense)
    budget2 = budget2 - expense;
    console.log(budget2);
    document.getElementById("newBudget").innerHTML = budget2;
    let a = document.getElementById("expense").value;
    console.log(a);

    

}