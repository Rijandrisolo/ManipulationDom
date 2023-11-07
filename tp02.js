function calculAddition(){

 let chiffre1= document.querySelector('#chiffre1').value;
 let chiffre2= document.querySelector('#chiffre2').value;
 console.log(chiffre1);
 if(chiffre1 || chiffre2){
        let total = parseInt(chiffre1)+parseInt(chiffre2);
        document.querySelector('#resultat').style.backgroundColor = "";
        document.querySelector('#resultat').innerHTML="Le résultat est "+total;
        
 }else if(chiffre1== 0|| chiffre2 ==0){
    console.log("non");
    document.querySelector('#resultat').style.backgroundColor = "red";
    document.querySelector('#resultat').innerHTML="Saisir des chiffres ";
 }


}
/////////////////////////////////////////////


function calculOperation(){

    let chiffre1= document.querySelector('#chiffre1').value;
    let chiffre2= document.querySelector('#chiffre2').value;
    let operateur = document.querySelector('#choix').value;
    let total = 0;
    let word="";
    console.log(typeof(operateur));
    if(chiffre1 && chiffre2 && operateur){
            switch(operateur){

                    case '+' :
                         total = parseInt(chiffre1)+parseInt(chiffre2);
                         word ="Le résultat de l'addition est "
                        break;
                    case '-' :
                        total = parseInt(chiffre1)-parseInt(chiffre2);
                        word ="Le résultat de la soustraction est "
                        break;
                    case '*' :
                        total = parseInt(chiffre1)*parseInt(chiffre2);
                        word ="Le résultat de la multiplication est "
                        break; 
                    case '/' :
                        total = parseInt(chiffre1)/parseInt(chiffre2);
                        word ="Le résultat de la division est "
                        break;     
            }
          
           document.querySelector('resultat').style.backgroundColor = "";
           document.querySelector('resultat').innerHTML=word+total;
           
    }else if(chiffre1== 0|| chiffre2 ==0){
       console.log("non");
       document.querySelector('resultat').style.backgroundColor = "red";
       document.querySelector('resultat').innerHTML="Saisir des chiffres ";
    }
   
   
   }
