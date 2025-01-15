import { checkLower, checkNumber, checkSymbol, checkUpper, copyBtn, generateBtn, inputNumValue, myBody, passwordInput  } from "./variables.js";

function hello(){
    console.log("Bonjour kaurantun");
}
// ! Fonction pour copier la valeur de l'input dans le clipboard
// ! Vérifier les checkbox et selon si checked, lancer la génération du tableau avec les caractères
// ! Fonction generate qui va lancer les verif des fonctions checked
// ! Récupérer la valeur de l'input  number 
// ! Evenement sur le bouton qui va lancer la fonction generate

// ! fonction sur chaque tableau de caractères qui va randomiser la valeur sortie


function generate(){
    // console.log("salut depuis la fonction generate");
    let upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    let lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let numberArray = ["0","1","2","3","4","5","6","7","8","9"]

    let symbolArray = ["{","}","(",")","[","]","#",":",";","^",",",".","?","!","|","&","_","`","~","@","$","%","/","=","+","-","*",'"',"'",]

    // console.log(upperArray, lowerArray, numberArray,symbolArray);

    function shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffle(upperArray)
    shuffle(lowerArray)
    shuffle(numberArray)
    shuffle(symbolArray)
    

    let passwordArray = []

    
    if(checkUpper.checked == true){
        passwordArray = passwordArray.concat(upperArray)
        console.log(passwordArray);
    }

    if(checkLower.checked == true){
        passwordArray = passwordArray.concat(lowerArray)
        console.log(passwordArray);
    }
    
    if(checkNumber.checked == true){
        passwordArray = passwordArray.concat(numberArray)
        console.log(passwordArray);
    }

    if(checkSymbol.checked == true){
        passwordArray = passwordArray.concat(symbolArray)
        console.log(passwordArray);
    }

    shuffle(passwordArray)
    console.log(passwordArray);


    let passwordStringTemp = passwordArray.toString()

    let inputValue = inputNumValue.value

    console.log(inputValue);

    passwordStringTemp=  passwordStringTemp.replaceAll(",", "")

    console.log(passwordStringTemp);

    let passwordString = passwordStringTemp.slice(0, `${inputValue}`)

    console.log(passwordString.length, passwordString);
    
    if(passwordString.length < 10){
        alert("Mot de passe trop court")
        passwordInput.value = ""
    }else if(passwordString.length >20){
        alert("Mot de passe trop long")
        passwordInput.value = ""
    }else{
        passwordInput.value = passwordString
    }
        
    console.log(passwordInput.value);
    
}
generateBtn.addEventListener("click", () => generate())

function copyPassword(){
    // console.log("salut depuis la fonction copy");
    
  let copyPassword = passwordInput.value;
//   console.log(copyPassword);
  

  navigator.clipboard.writeText(copyPassword);

  alert("Copied password : " + `${copyPassword}`);
}
copyBtn.addEventListener("click", () => copyPassword())



export { hello, generate }