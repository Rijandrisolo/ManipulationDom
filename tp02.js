function calcul(){

 let chiffre1= document.getElementById('chiffre1').value;
 let chiffre2= document.getElementById('chiffre2').value;
 console.log(chiffre1);
 if(chiffre1 || chiffre2){
        let total = parseInt(chiffre1)+parseInt(chiffre2);
        document.getElementById('resultat').style.backgroundColor = "";
        document.getElementById('resultat').innerHTML="Le résultat est "+total;
        
 }else if(chiffre1== 0|| chiffre2 ==0){
    console.log("non");
    document.getElementById('resultat').style.backgroundColor = "red";
    document.getElementById('resultat').innerHTML="Saisir des chiffres ";
 }


}
/////////////////////////////////////////////


function calcul1(){

    let chiffre1= document.getElementById('chiffre1').value;
    let chiffre2= document.getElementById('chiffre2').value;
    let operateur = document.getElementById('choix').value;
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
          
           document.getElementById('resultat').style.backgroundColor = "";
           document.getElementById('resultat').innerHTML=word+total;
           
    }else if(chiffre1== 0|| chiffre2 ==0){
       console.log("non");
       document.getElementById('resultat').style.backgroundColor = "red";
       document.getElementById('resultat').innerHTML="Saisir des chiffres ";
    }
   
   
   }
