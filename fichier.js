// Exercice 1.2 : Les Variables : 

// let A = 5 ; 
// let B = 2 ; 
// A = B ; 
// B = A ; 

// Quels seront les valeurs de A et B ? 
// Dans cet exemple A sera égale à 2 et B sera égale à 5

// Exercice 1.3 : Les Variables : 

// Ecrivez un algorithme transférant à B la valeur de A, à C la valeur de B et à A la valeur de C. 
// let A = 5;
// let B = 2;
// let C;

// C = A;
// A = B;
// B = C;

// console.log("A:",A);
// console.log("B:",B);
// console.log("C:",C);

// Exercice 1.4 : Les Variables : 
// Que produit l’algorithme suivant ? 

// let A = "423" ; 
// let B = "12" ; 
// let C ; 
// C = A + B ; 

// console.log(C);
// console.log(typeof C);
// Réponse: Une chaîne de caractére  avec 42312 car les nombres sont entourer de guillements. L'opérateur typeof me le confirme.


// Exercice 4.2 : 
// Que produit l’algorithme suivant ? 

// let A = 423; 
// let B = "12"; 
// let C; 
// let C = A + B; 

// console.log(C);

// Réponse ici nous allons avoir une erreur car nous donnons deux fois le nom C à notre variable.


// *********************** Lecture et écriture ***********************

// function recup() { 
//     let a = document.getElementById("imput1").value;     
//     if(a ==""){         
//         console.log("des champs sont vides"); 
//     } 
//     //condition si le champ est Complété 
//     else if (a !== NaN){  
//         a = parseInt(a);
//         console.log(a+2);                                          
//     }  
// } 

// Exercice 5.1 : Lecture et Ecriture : 
// Quel résultat produit le programme suivant ? 

// let val = 231 ; 
// let double = val * 2 ; 
// console.log(val) ; 
// console.log(double) ; 

// Exercice 5.2 : Lecture et Ecriture : 
// Ecrire un programme qui demande un nombre à l’utilisateur (dans un champ de formulaire), puis qui 
// calcule et affiche le carré de ce nombre dans la console du navigateur internet. 

// function recup() { 
//     let num = parseInt(document.getElementById("imput1").value);
//     let carre = num ** 2; 
//     console.log(carre);     
// }

// Exercice 5.3 : Lecture et Ecriture : 
// Ecrire un programme qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui 
// fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement. 

// function calculeDePrix(){
//     let prixHT = parseFloat(prompt("Entrez le prix HT de l'article :"));
//     let nombretArticles = parseInt(prompt("Entrez le nombre d'articles :"));
//     let tauxTVA = parseFloat(prompt("Entrez le taux de TVA en % :"));

//     let prixTTC = prixHT*nombretArticles * (1+tauxTVA/100);
//     console.log("Le prix TTC est de :" + prixTTC.toFixed(2) + "€");
// }

// calculeDePrix();

// Exercice 6.1 : Les tests : 
// Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est 
// positif ou négatif (on laisse de côté le cas où le nombre vaut zéro). 

// function numberType(){
// let number = parseInt(prompt("Entrez un nombre :"));
// if(number > 0){
//     console.log("Ce nombre est positif");
// }
// if(number < 0){
//     console.log("Ce nombre est négatif");
// }else{

// }
// }
// numberType();

// Exercice 6.2 : Les tests : 
// Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si leur produit est 
// négatif ou positif (on laisse de côté le cas où le produit est nul). Attention toutefois : on ne doit pas 
// calculer le produit des deux nombres. 


// function produit() {
//     let a = parseInt(prompt("Entrez un nombre :"));
//     let b = parseInt(prompt("Entrez un nombre :"));
//     if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
//         console.log('le produit est positif');
//     } else {
//         console.log('le produit est négatif');
//     }
// }
// produit(); 

// Exercice 6.3 : Les tests : 
// Ecrire un algorithme qui demande trois noms à l’utilisateur et l’informe ensuite s’ils sont rangés ou 
// non dans l’ordre alphabétique. 

// function nameOrder(){
//     let name1 = (prompt("Entrez un nom :"));
//     let name2 = (prompt("Entrez un nom :"));
//     let name3 = (prompt("Entrez un nom :"));
//     if (name1 < name2 && name2 < name3) {
//                 alert("Les noms sont rangés dans l'ordre alphabétique");
//             } else {
//                 alert("Les noms ne sont pas rangés dans l'ordre alphabétique");
//             }
//         }

// nameOrder();

// Exercice 6.4 : Les tests : 

// Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est 
// négatif ou positif (on inclut cette fois le traitement du cas où le produit peut-être nul). Attention 
// toutefois, on ne doit pas calculer le produit ! 

// function produit(a,b) {
//     let c = a * b;
//     if (c > 0) {
//         console.log('le produit est positif');
//     } 
//     elseif (c < 0) {
//         console.log('le produit negatif');
//     } else {
//         console.log('le produit est nul');
//     }
// }
// produit(10,-2); 

// Exercice 6.5 : Les tests : 
// Ecrire un algorithme qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie 
// :  
// • "Poussin" de 6 à 7 ans 
// • "Pupille" de 8 à 9 ans 
// • "Minime" de 10 à 11 ans 
// • "Cadet" après 12 ans 

// function sportCategory () {
// let age = parseInt(prompt("Entrez votre âge:"));
//     if (age >= 6 && age <= 7){
//         alert("Tu es dans la carégorie : Poussin");
//     }
//     else if (age >= 8 && age <= 9){
//         alert("Tu es dans la carégorie : Pupille");
//     }
//     else if (age >= 10 && age <= 11 ){
//         alert("Tu es dans la carégorie : Minime");
//     }
//     else if(age >= 12){
//         alert("Tu es dans la carégorie : Cadet");
//     }else{
//             alert("Tu ne fais partie d'aucunes catégories");
// }
// }

// sportCategory();

// Exercice 7.1 : Les boucles : 
// Récupérer une valeur dans un champ de formulaire et ajouter à chaque tour d’un boucle +1, 10 fois, 
// afficher le résultat dans la console avec console.log() : 
// EX : je saisie 1-> 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (dans la console). 

// function recup(){ 
//     let nbr = document.getElementById("imput1").value; 
//     nbr = parseInt(nbr); 
//     for(let i=1; i<=10; i++){ 
//         console.log(nbr+i); 
//     } 
// } 
 

// Exercice 7.2 : Les boucles : 
// Récupérer une valeur dans un champ de formulaire et afficher dans la console la table de 
// multiplication de cette valeur : 
// EX : je saisie 2 -> 
// 2 x 1 = 2 
// 2 x 2 = 4 
// ... 
// 2 x 10 = 20 

// function recup(){ 
//     let nbr = document.getElementById("imput1").value; 
//     let resultat = document.getElementById("bouton"); 
//     nbr = parseInt(nbr);  
//     for(let i=1; i<=10; i++){ 
//         console.log(nbr+" x "+i+" = "+(nbr*i)); 
//         resultat.innerHTML += "<p>"+nbr+" x "+i+" = "+(nbr*i)+"</p>"; 
//     } 
// } 
 

// Exercice 8.1 tableaux : 
// Exercice tableau : depuis les 3 champs de formulaire compléter le tableau tab (colonne 0,1 
// et 2). 

// function recup(){
//     let tab = []; 
//     let retour = document.getElementById("retour"); 
//     let nom = document.getElementById("nom").value; 
//     let prenom = document.getElementById("prenom").value; 
//     let cp = document.getElementById("cp").value; 

//     tab[0] = nom; 
//     tab[1] = prenom; 
//     tab[2] = cp; 

//     for(let i = 0; i<tab.length; i++){ 
//     console.log(" "+ tab[i]); 
//     retour += "<p> "+ 
//     tab[i]+"</p>"; 
//     } 
// } 

