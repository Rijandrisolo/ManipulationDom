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
    console.log(typeof(operateur));
    if(chiffre1 && chiffre2 && operateur){
            switch(operateur){

                    case '+' :
                         total = parseInt(chiffre1)+parseInt(chiffre2);
                        break;
                    case '-' :
                        total = parseInt(chiffre1)-parseInt(chiffre2);
                        break;
                    case '*' :
                        total = parseInt(chiffre1)*parseInt(chiffre2);
                        break; 
                    case '/' :
                        total = parseInt(chiffre1)/parseInt(chiffre2);
                        break;     
            }
          
           document.getElementById('resultat').style.backgroundColor = "";
           document.getElementById('resultat').innerHTML="Le résultat est "+total;
           
    }else if(chiffre1== 0|| chiffre2 ==0){
       console.log("non");
       document.getElementById('resultat').style.backgroundColor = "red";
       document.getElementById('resultat').innerHTML="Saisir des chiffres ";
    }
   
   
   }
