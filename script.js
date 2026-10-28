let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let expression = "";
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        let value = button.innerText;

        if (value === "AC"){
            expression = "";
            inputbox.value = "";
        }
        else if ( value === "DEL"){
            expression = expression.slice(0,-1);
            inputbox.value = expression;
        }
        else if ( value === "="){
           try{
            expression = eval(expression).toString();
            inputbox.value = expression;
            }
            catch{
                 inputbox.value = "error";
                 expression = "";
            }
        }
        else{
            expression += value; 
            inputbox.value = expression;
        }
        }
    );
});
