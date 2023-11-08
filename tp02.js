    /**
     * addition
     */

function calculAddition(){
   

 let chiffre1= document.querySelector('#chiffre1').value;
 let chiffre2= document.querySelector('#chiffre2').value;
 console.log(chiffre1);
 if(chiffre1 || chiffre2){
        let total = parseInt(chiffre1)+parseInt(chiffre2);
        document.querySelector('#resultat').style.backgroundColor = "";
        document.querySelector('#resultat').innerHTML=`Le résultat est ${total}`;
        
 }else if(chiffre1== 0&& chiffre2 ==0){
    console.log("non");
    document.querySelector('#resultat').style.backgroundColor = "red";
    document.querySelector('#resultat').innerHTML="Saisir des chiffres ";
 }


}
/////////////////////////////////////////////
/**
 * saisie de chiffres et choix opérateur
 */

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
                         word =`Le résultat de l'addition est ${total}`;
                        break;
                    case '-' :
                        total = parseInt(chiffre1)-parseInt(chiffre2);
                        word =`Le résultat de la soustraction est ${total}`;
                        break;
                    case '*' :
                        total = parseInt(chiffre1)*parseInt(chiffre2);
                        word =`Le résultat de la multiplication est ${total}`;
                        break; 
                    case '/' :
                        total = parseInt(chiffre1)/parseInt(chiffre2);
                        word =`Le résultat de la division est ${total}`;
                        break;     
            }
          
           document.querySelector('#resultat').style.backgroundColor = "";
           document.querySelector('#resultat').innerHTML= word;
           
    }else if(chiffre1== 0|| chiffre2 ==0){
       console.log("non");
       document.querySelector('#resultat').style.backgroundColor = "red";
       document.querySelector('#resultat').innerHTML="Saisir des chiffres ";
    }
   
   
   }
   ///////////////////////////
   /**
    * Permet de vérifier si un formulaire est vide
    * 
    */

   function checkFormulaire(){

    let nom= document.querySelector('#nom').value;
    let prenom= document.querySelector('#prenom').value;
    let dateNaissance= document.querySelector('#dateNaissance').value;
    console.log(nom);
    
              
    if(nom && prenom && dateNaissance){
    }else{
       console.log("non");
       document.querySelector('#resultat').style.backgroundColor = "red";
       document.querySelector('#resultat').innerHTML="Il faut renseigner les éléments ";
    }
   
   
   }

   ///////////////////////////////
    /**
     * 
     * affichage json
     */
   function affichageJson(){
    

    let data = {"polluant":"CO2", "unite":"milliards de tonnes", "annee":2017, 
    "pays":[
        {"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"}, 
        {"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"}, 
        {"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"}, 
        {"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"}, 
        {"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"}, 
        {"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"}, 
        {"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"}, 
        {"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"}, 
        {"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}
    ]
    }
    let polluant = data.polluant;
    let annee = data.annee;
    let pays = data.pays;
    console.log(pays);
       
    
       let e = document.querySelector('#affichage');
       console.log(e);
        e.innerHTML = "<h1>" +"Polluant :"+ polluant+ "</h1>";
        e.innerHTML += "<h2>" +"Année de mesure :"+ annee+ "</h1>";
        

        for (let i=0; i<=pays.length;i++){
            
            
            //e.innerHTML += "<span>"+ " | "+"Pays : "+ pays[i].nom+" | "+"Valeurs : "+ pays[i].valeur+" | "+"Pourcentage : "+pays[i].pourcentage+"</span>"+"<br>";
            e.innerHTML += `<span> | Pays : ${pays[i].nom} | Valeurs : ${pays[i].valeur} | Pourcentage : ${pays[i].pourcentage} </span> <br>`;

        }
        
    }
///////////////////////////////

/*function affichageJsonTableau(){

    let data = {"polluant":"CO2", "unite":"milliards de tonnes", "annee":2017, 
    "pays":[
        {"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"}, 
        {"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"}, 
        {"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"}, 
        {"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"}, 
        {"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"}, 
        {"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"}, 
        {"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"}, 
        {"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"}, 
        {"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}
    ]
    }
    let polluant = data.polluant;
    let annee = data.annee;
    let pays = data.pays;
    console.log(pays);
       
    
       let e = document.querySelector('#affichage');
       console.log(e);
        e.innerHTML = "<h1>" +"Polluant :"+ polluant+ "</h1>";
        e.innerHTML += "<h2>" +"Année de mesure :"+ annee+ "</h1>";
        e.innerHTML += "<table border=1">" ;
        e.innerHTML += "<thead>";
        e.innerHTML +="<tr>"+"<th>"+ "Pays"+"</th>"+"<th>"+ "Valeur"+"</th>"+"<th>"+ "%"+"</th>"+"</tr>"
        e.innerHTML += "</thead>";
       /* e.innerHTML += "<tbody>" ;

        for (let i=0; i<=pays.length;i++){
            
            
            e.innerHTML += "<tr>"+"<td>"+ pays[i].nom+ pays[i].valeur+pays[i].pourcentage+"</td>"+"</tr>";


        }
        e.innerHTML += "</tbody>" ;
        e.innerHTML += "</table>" ;
   }*/