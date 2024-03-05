let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=')
        {
            try {
                string = eval(string);
                if(isNaN(string))
                {
                    throw new Error('')
                }
                input.value = string;
            } 
            catch(error) {
                input.value = "Syntax Error";
                setTimeout(()=>{
                    input.value = "";
                },2000)
            }
        }
        else if(e.target.innerHTML == 'AC'){
           string = "";
           input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length -1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})