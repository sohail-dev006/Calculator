let input1 = document.getElementById("display");
let box = document.getElementById("element");
let nam1 = ""; 
let nam2 = "";
let nam3 = "";

let array4 = ["AC"];

array4.forEach((e) => {
    let btn = document.createElement("button");
    btn.innerText = e;
    box.append(btn);
    btn.addEventListener('click', () => {
        input1.value = "";
    });
});


let array2 = ["+", "-", "*", "/", "%", "."];

array2.forEach((e) => {
let btn = document.createElement("button");
btn.innerText = e;
btn.value = e;
box.append(btn);
btn.addEventListener('click', () => {
    nam2 = btn.value;
    nam1 = parseFloat(input1.value); 
    input1.value = "";
});
});


let array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1,0,"00",","];

array1.forEach((e) => {
    let btn = document.createElement("button");
    btn.innerText = e;
    btn.value = e;
    box.append(btn);
    btn.addEventListener('click', () => {
        input1.value += btn.value; 
    });
});



let array3 = ["="];

array3.forEach((equal) => {
    let btn = document.createElement("button");
    btn.innerText = equal;
    box.append(btn);
    btn.addEventListener('click', () => {
        nam3 = parseFloat(input1.value); 
        input1.value = "";


        if (nam2 === "+") {
            input1.value = nam1 + nam3;
        } else if (nam2 === "-") {
            input1.value = nam1 - nam3;
        } else if (nam2 === "*") {
            input1.value = nam1 * nam3;
        } else if (nam2 === "/") {
            input1.value = nam1 / nam3;
        } else if (nam2 === "%") {
            input1.value = nam1 % nam3;
        } else {
            input1.value = ""; 
        }
    });
});