let box = document.getElementById("element");
let input1 = document.getElementById("display");



let array1 = [9,8,7,6,5,4,3,2,1,0];
let array2 = ["+","-","*","/","%"];



let value1 = null;
let value2 = null;
let operator = null;


array1.forEach((e)=> {
let  btn = document.createElement("button");
     btn.value = e;
     btn.innerText = e;
     box.append(btn);
     btn.addEventListener('click',()=>{
     input1.value += btn.value;

    });
    

});

array2.forEach((e)=> {
    let  btn = document.createElement("button");
         btn.value = e;
         btn.innerText = e;
         box.append(btn);
         btn.addEventListener('click',()=>{
         value2 = btn.value;
         console.log(value2);
         value1 = input1.value;
         input1.value = "";

         
        });
    
        
    
    });

    let array3 = ["="]

    array3.forEach((e)=> {
        let  btn = document.createElement("button");
             btn.value = e;
             btn.innerText = e;
             box.append(btn);
             btn.addEventListener('click',()=>{
             value2 = btn.value;
             console.log(value2);
             value1 = input1.value;
             input1.value = "";
    
             
            });
            
        
        });

