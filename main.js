const form = document.getElementById('section-form');
const LeTitre = document.getElementById('titre');
const titreError = document.getElementById('titre-erreur');
const LeAuthor = document.getElementById('author');
const authorErreur  = document.getElementById('author-erreur');
const LeGenre = document.getElementById('genre');
const genreErreur = document.getElementById('genre-erreur');
const LeYear = document.getElementById('year');
const yearErreur = document.getElementById('year-erreur');
const LeStatus = document.getElementById('status');
const statusErreur = document.getElementById('status-erreur');
const LeDescription = document.getElementById('message')
const LeHead = document.getElementById('head');
const LeBody = document.getElementById('tableauCorps')

const regexNom = /^[A-Za-zÀ-ÿ\s-]+$/;

let livres = JSON.parse(localStorage.getItem('livres')) || []


form.addEventListener('submit', validerAll);

function validerAll(event){
    
    event.preventDefault()

    if(!validerNom() || !validerAuthor() || !validerYear()){
        return;
    }
    const livre= {
        Id: new Date().getTime(),
        Titre: LeTitre.value,
        author:LeAuthor.value,
        Genre:  LeGenre.value,
        Year: Number(LeYear.value),
        Status: LeStatus.value,
        description: LeDescription.value,
    }
    livres.push(livre);
    localStorage.setItem('livres', JSON.stringify(livres));
    afficherLivres();
    form.reset();
}




function afficherLivres() {
    LeBody.innerHTML = "";

    livres.forEach(function(livre) {
        LeBody.innerHTML += `
            <tr>
                <td>${livre.Id}</td>
                <td>${livre.Titre}</td>
                <td>${livre.author}</td>
                <td>${livre.Genre}</td>
                <td>${livre.Year}</td>
                <td>${livre.Status}</td>
                <td>${livre.description}</td>
                <td class="flex justify-around"><button class="bg-green-500 p-2 rounded-2xl">modifier</button>
                <button class="bg-red-500 p-2 rounded-2xl" id="sup">supprimer</button>
                </td>
            </tr>
        `;
    });
};
afficherLivres();




const LeRecherche = document.getElementById('recherche');
function searcheBytitle(){
 const result = livres.filter((line) =>{
        return line.Titre.toLowerCase().trim().includes(LeRecherche.value.trim().toLowerCase());
    })
    return result;
}

const LeCorps= document.getElementById('corps');
function createTable(arr){
   LeCorps.innerHTML += `
            <tr>
                <td>${arr[0].Id}</td>
                <td>${arr[0].Titre}</td>
                <td>${arr[0].author}</td>
                <td>${arr[0].Genre}</td>
                <td>${arr[0].Year}</td>
                <td>${arr[0].Status}</td>
                <td>${arr[0].description}</td>
                <td class="flex justify-around"><button class="bg-green-500 p-2 rounded-2xl">modifier</button>
                <button class="bg-red-500 p-2 rounded-2xl" id="sup">supprimer</button>
                </td>
            </tr>
        `;
}
const LeSearchErreur = document.getElementById('search-erreur');
const LeSearche = document.getElementById('search');

LeSearche.addEventListener('click', function(){
    
    const finalResult = searcheBytitle();
    if(finalResult.length === 0 || LeRecherche.value === ""){
        LeSearchErreur.textContent = "Titre introuvable!";
        LeSearchErreur.classList.remove('hidden')
    }else{
        LeSearchErreur.textContent = "";
        LeSearchErreur.classList.add('hidden');
        disk.classList.remove('hidden');
        createTable(finalResult);
    }
    LeRecherche.value = ""
})



function searcheByauthor(){
 const result = livres.filter((line) =>{
        return line.author.toLowerCase().trim().includes(LeRecherche.value.trim().toLowerCase());
    })
    return result;
}

function createTable(arr){
    LeCorps.innerHTML = "";
   LeCorps.innerHTML += `
            <tr>
                <td>${arr[0].Id}</td>
                <td>${arr[0].Titre}</td>
                <td>${arr[0].author}</td>
                <td>${arr[0].Genre}</td>
                <td>${arr[0].Year}</td>
                <td>${arr[0].Status}</td>
                <td>${arr[0].description}</td>
                <td class="flex justify-around"><button class="bg-green-500 p-2 rounded-2xl">modifier</button>
                <button class="bg-red-500 p-2 rounded-2xl" id="sup">supprimer</button>
                </td>
            </tr>
        `;
}

const LeFind = document.getElementById('find');

LeFind.addEventListener('click', function(){
    
    const finalResult = searcheByauthor();
    if(finalResult.length === 0 || LeRecherche.value === ""){
        LeSearchErreur.textContent = "author introuvable!";
        LeSearchErreur.classList.remove('hidden')
    }else{
        LeSearchErreur.textContent = "";
        LeSearchErreur.classList.add('hidden');
        disk.classList.remove('hidden');
        createTable(finalResult);

    }
    LeRecherche.value = ""
})
 







































function validerNom(){
    if (LeTitre.value.trim() === "" || !regexNom.test(LeTitre.value.trim())) {
        titreError.textContent = "Please enter a valid name using letters only.";
        titreError.classList.remove('hidden');
        return false;
    } else {
        titreError.textContent = "";
        titreError.classList.add('hidden');
        return true;
    }
}

function validerAuthor(){
    if(LeAuthor.value.trim() === ""){
        authorErreur.textContent ="Please enter the author's name.";
        authorErreur.classList.remove('hidden');
        return false;
    }else{
        authorErreur.textContent ="";
        authorErreur.classList.add('hidden');
        return true;
    }

}
function validerYear(){
    if(LeYear.value.trim() === ""){
        yearErreur.textContent = "Please enter the year."
        yearErreur.classList.remove('hidden');
        return false;
    }else{
        yearErreur.textContent = "";
        yearErreur.classList.add('hidden');
        return true;
    }

}



