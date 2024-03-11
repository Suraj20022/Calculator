let displya = document.querySelector('#displya')
const allButtons = document.querySelectorAll('button');
let string = '';
allButtons.forEach((button)=>{
    button.addEventListener('click', function(event){
        if(button.innerHTML === '='){
            string = eval(string);

            displya.value = string;
        }
        else if(button.innerHTML === 'C'){
            string = string = '';

           displya.value = string;

        }
       
        else{

            string = string + button.innerHTML;
            console.log(string);    
                displya.value = string
        }



    })

})