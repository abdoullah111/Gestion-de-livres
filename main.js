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
        ID: new Date().getTime(),
        Titre: "",
        author:"",
        Genre: "",
        Year: 0,
        Status: "",
        description: ""
    }
    livre.Titre = LeTitre.value;
    livre.author = LeAuthor.value;
    livre.Genre = LeGenre.value;
    livre.Year = Number(LeYear.value);
    livre.Status = LeStatus.value;
    livre.description = LeDescription.value;
    livres.push(livre);
    localStorage.setItem('livres', JSON.stringify(livres))
}





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



