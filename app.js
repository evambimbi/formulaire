
let fileURL

const dropArea = document.querySelector(".space-to-drop");


 let creer = document.querySelector('#creer');
 let btnModifier=document.querySelector('#creer1');
 btnModifier.style.display="none";  


let file;
let form = document.querySelector('#form1');

dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault();
  dropArea.classList.add("active");
  
});
//pour glisser l'image
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");

});

//pour deposer l'image 
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault();
  //obetenir l'image selectionner
  file = event.dataTransfer.files[0];
  showFile(); //appel de fonction
});

function showFile(){
  let fileType = file.type; //obtention du type de fichier sélectionné
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //ajout de quelques extensions d'images valides dans le tableau
  if(validExtensions.includes(fileType)){ //si le fichier sélectionné par l'utilisateur est un fichier image
    let fileReader = new FileReader(); //création d'un nouvel objet FileReader
    fileReader.onload = ()=>{
         fileURL = fileReader.result; //passage de la source du fichier utilisateur dans la variable fileURL
      let imgTag = `<img src="${fileURL}" alt="image" id="image">`; //création d'une balise img et passage de la source du fichier sélectionné par l'utilisateur dans l'attribut src
      dropArea.innerHTML = imgTag; //ajouter la balise img créée dans le conteneur dropArea
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }

}


/* =========================
        Zone de fonction
  ==========================
*/


function ajoutContact(prenom, nom, telephone, group,mail, bio,imgU)
{
  let divlist = document.getElementsByClassName('divlist')[0];
 

  let divtout=document.createElement('div');


  divtout.innerHTML= `
               
  <div class="divGroup">
            <div class="divimage">
                    <img id="imgModifier" src="${imgU}"/>
              </div>

                <div class="contenus">

                    <div class="Nomicon">

                        <p id="prenom">${prenom}</p>
                        <p id="nom">${nom}</p>
                        <p id="group">-${group}</p>

                        <div class="iconGroup">
                            <i id="iconmodif" class="fa-solid fa-user-pen" onclick="modifier(this)"></i>
                            <i id="icondel" class="fa-solid fa-trash-can" onclick="supprimer(this)"></i>
                        </div>

                    </div>

                    <div id="telephone">${telephone}</div>
                    <div id="mail">${mail}</div>
                    <div id="bio">${bio}</div>
                </div>  
            </div>
  `
   
divlist.appendChild(divtout); 

}

//pour vider le formulaire apres avoir cliquer sur le bouton creer

function videForm(){

 document.getElementById('prenom').value="";
 document.getElementById('nom').value="";
 document.getElementById('numero').value="";
 document.getElementById('group').value="";
 document.getElementById('mail').value="";
 document.getElementById('bio').value="";
 

}

//pour supprimer les information dans les liste de contacte
function supprimer(event)
{
  event.closest('.divGroup').remove();
}
 
//pour modifier les information dans la liste de contacte

function modifier (event)
{
 let retrieve = event.closest('.divGroup');
 
// recuperation des informations
 let Prenom=retrieve.querySelector('#prenom').innerText;
 let Nom=retrieve.querySelector('#nom').innerText; 
 let Group=retrieve.querySelector('#group').innerText;
 let Telephone=retrieve.querySelector('#telephone').innerText;
 let Mail=retrieve.querySelector('#mail').innerText;
 let Bio=retrieve.querySelector('#bio').innerText;
 let newImage=retrieve.querySelector('#imgModifier');

 document.getElementById('prenom').value=Prenom;
 document.getElementById('nom').value=Nom;
 document.getElementById('numero').value=Telephone;
 document.getElementById('group').value= Group;
 document.getElementById('mail').value=Mail;
 document.getElementById('bio').value=Bio; 


 creer.style.display="none";

 btnModifier.style.display="inline"; 





 btnModifier.addEventListener('click', (event)=>{
  event.preventDefault();

  let Prenom=document.getElementById('prenom').value;
 let Nom=document.getElementById('nom').value;
 let Group=document.getElementById('group').value;
 let Telephone=document.getElementById('numero').value;
 let Mail=document.getElementById('mail').value;
 let Bio=document.getElementById('bio').value;


 retrieve.querySelector('#prenom').innerText= Prenom;
 retrieve.querySelector('#nom').innerText=Nom;
 retrieve.querySelector('#telephone').innerText=Telephone;
 retrieve.querySelector('#group').innerText= Group;
 retrieve.querySelector('#mail').innerText=Mail;
 retrieve.querySelector('#bio').innerText=Bio;
 newImage.src=fileURL; 


  creer.style.display="inline";

 btnModifier.style.display="none"
 })
 


}

 function resetImg ()
 {
  document.getElementById('image').remove();
   fileURL = null

 }
  

/* =========================
          Evenement
  ==========================
*/


form.addEventListener('submit',function(event){

event.preventDefault();

let prenom=document.getElementById('prenom').value;
let nom=document.getElementById('nom').value;
let numero = document.getElementById('numero').value;
let group = document.getElementById('group').value;
let mail = document.getElementById('mail').value;
let bio= document.getElementById('bio').value;
fileURL;

ajoutContact(prenom, nom, numero, group, mail, bio,fileURL);
videForm(); 
resetImg();





});


const reset = document.getElementById('reset');
 
    reset.addEventListener('click',()=>{
      document.querySelector('#image').remove();
      pargraph.innerHTML +="deposez la photo<br />ici";
    })
