// Chaque résolution
if(window.matchMedia("(min-width: 200px) and (max-width: 767px)").matches) 
{
    const navbarLinks = document.querySelectorAll("#myDropdown a");
    
    navbarLinks.forEach(element => element.addEventListener("click", navbarLinkClick));
    
    function navbarLinkClick(e)
    {
        smoothScroll(e);
    }
    
    function smoothScroll(e)
    {
        const targetId = e.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop - 39;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        
        window.requestAnimationFrame(step);
        
        function step(timestamp)
        {
            if(!start)
            {
                start = timestamp;
            }
            const progress = timestamp - start;
            window.scrollTo(0, ease(progress, startPosition, distance, duration));
            if(progress < duration)
            {
                window.requestAnimationFrame(step);
            }
        }
    }
    
    function ease(t, b, c, d)
    {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    
    const scrollMenu = (e) =>
    {
        const navLien = document.querySelectorAll("#myDropdown a");
        const scrollPos = window.pageYOffset + 45 || document.documentElement.scrollTop + 45 || document.body.scrollTop + 45;
        
        for(let i = 0; i < navLien.length; i++)
        {
            const lienHref = navLien[i].getAttribute("href");
            const refElement = document.querySelector(lienHref);
            // Si la valeur de la position de la fenêtre est inférieure à la valeur du défilement et que si la valeur de cette fenêtre + la valeur totale de la hauteur d'un bloc est supérieure à la valeur du défilement
            // Si le bloc ne sort pas vers le haut et vers le bas
            if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos))
            {
                navLien[i].classList.add("active");
            }
            else
            {
                navLien[i].classList.remove("active");
            }
        }
    }
    
    window.document.addEventListener("scroll", scrollMenu);
}

else if(window.matchMedia("(max-width: 1023px)").matches) 
{  
    const navbarLinks = document.querySelectorAll("#myDropdown a");
    
    navbarLinks.forEach(element => element.addEventListener("click", navbarLinkClick));
    
    function navbarLinkClick(e)
    {
        smoothScroll(e);
    }
    
    function smoothScroll(e)
    {
        const targetId = e.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop - 54;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        
        window.requestAnimationFrame(step);
        
        function step(timestamp)
        {
            if(!start)
            {
                start = timestamp;
            }
            const progress = timestamp - start;
            window.scrollTo(0, ease(progress, startPosition, distance, duration));
            if(progress < duration)
            {
                window.requestAnimationFrame(step);
            }
        }
    }
    
    function ease(t, b, c, d)
    {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    
    const scrollMenu = (e) =>
    {
        const navLien = document.querySelectorAll("#myDropdown a");
        const scrollPos = window.pageYOffset + 55 || document.documentElement.scrollTop + 55 || document.body.scrollTop + 55;
        
        for(let i = 0; i < navLien.length; i++)
        {
            const lienHref = navLien[i].getAttribute("href");
            const refElement = document.querySelector(lienHref);
            if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos))
            {
                navLien[i].classList.add("active");
            }
            else
            {
                navLien[i].classList.remove("active");
            }
        }
    }
    
    window.document.addEventListener("scroll", scrollMenu);
}

else
{
    const navbarLinks = document.querySelectorAll("nav a");
    
    navbarLinks.forEach(element => element.addEventListener("click", navbarLinkClick));
    
    function navbarLinkClick(e)
    {
        e.preventDefault();
        smoothScroll(e);
    }
    
    function smoothScroll(e)
    {
        const targetId = e.currentTarget.getAttribute("href");
        const targetPosition = document.querySelector(targetId).offsetTop - 66;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;
        
        window.requestAnimationFrame(step);
        
        function step(timestamp)
        {
            if(!start)
            {
                start = timestamp;
            }
            const progress = timestamp - start;
            window.scrollTo(0, ease(progress, startPosition, distance, duration));
            if(progress < duration)
            {
                window.requestAnimationFrame(step);
            }
        }
    }
    
    function ease(t, b, c, d)
    {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    
    const scrollMenu = (e) =>
    {
        const navLien = document.querySelectorAll("nav a");
        const scrollPos = window.pageYOffset + 70 || document.documentElement.scrollTop + 70 || document.body.scrollTop + 70;
        
        for(let i = 0; i < navLien.length; i++)
        {
            const lienHref = navLien[i].getAttribute("href");
            const refElement = document.querySelector(lienHref);
            if(refElement.offsetTop <= scrollPos && (refElement.offsetTop + refElement.offsetHeight > scrollPos))
            {
                navLien[i].classList.add("active");
            }
            else
            {
                navLien[i].classList.remove("active");
            }
        }
    }
    
    window.document.addEventListener("scroll", scrollMenu);
    window.document.addEventListener("mouseover", scrollMenu);

    
    const sectionsClasses = document.querySelectorAll(".profile, .course, .projets, .taches, .contact");
    const sectionsId = document.querySelectorAll("#about, #course, #projets, #taches, #contact");
    const menusId = document.querySelectorAll("a#abo, a#cou, a#pro, a#tac, a#con");
    
    Array.from(menusId).map(idMenu => 
    {      
        idMenu.addEventListener("click", () =>
        {
            for(let i = 0; i < menusId.length; i++)
            {
                if(idMenu === menusId[i])
                {
                    setTimeout(() => 
                    {
                        sectionsClasses[i].id = "sectionAnimation";
                    }, 
                    650);
                }
            }
        }
        );
    }
    );
    
    Array.from(sectionsId).map(idSection => 
    {      
        idSection.addEventListener("mouseover", () =>
        {
            for(let i = 0; i < sectionsId.length; i++)
            {
                if(idSection === sectionsId[i])
                {
                    setTimeout(() => 
                    {
                        sectionsClasses[i].id = "sectionAnimation";
                    }, 
                    100);
                }
            }
        }
        );
    }
    );
    
    
    const parallax = document.querySelectorAll("#course, #projets, #taches");
    
    parallax.forEach(section =>
    {
        window.addEventListener("scroll", () =>
        {
            section.style.backgroundPositionY = `-${window.scrollY / 2}px`; 
        }
        );
    }
    );
}

// Actualisation automatique après chargement du site
window.addEventListener('load', () =>
{
    if(!window.location.hash)
    {
        window.location += "#.";
        window.location.reload();
    }
});


$(".hide-brand1, .hide-brand2").css('visiblility', 'hidden');

$(".hide-brand1").textillate(
{
    initialDelay: 800,
    in: 
    {
        effect: 'fadeInUp', 
        sequence: true, 
        delay: 20
    }
}
);

$(".hide-brand2").textillate(
{
    initialDelay: 800,
    in: 
    {
        effect: 'fadeInUp', 
        sequence: true, 
        delay: 10
    }
}
);


document.getElementById("nom").addEventListener("input", (e) =>
{
    const nom = document.getElementById("nom");

    if(e.target.value.length == 0)
    {
        nom.style.boxShadow = "inset -6px 0 0 0 black";
    }
    else if(e.target.value.length < 4) 
    {
        nom.style.boxShadow = "inset -6px 0 0 0 #ff0000";
    } 
    else
    {
        nom.style.boxShadow = "inset -6px 0 0 0 #00ff0a";
    }
});

document.getElementById("email").addEventListener("input", (e) =>
{
    const email = document.getElementById("email");

    if(e.target.value.length == 0)
    {
        email.style.boxShadow = "inset -6px 0 0 0 black";
    }
    else if(!e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/))
    {
        email.style.boxShadow = "inset -6px 0 0 0 #ff0000";
    }
    else
    {
        email.style.boxShadow = "inset -6px 0 0 0 #00ff0a";
    }
});


function compterCaracteres(caractere)
{
    const textarea = document.getElementById("caracteres");
    textarea.innerHTML = 500 - caractere.value.length + " caractères restants";

    if(500 - caractere.value.length == 0)
    {
        textarea.style.color = 'orange';
    }
    else
    {
        textarea.style.color = 'white';
    }
}


// Affichage du menu
document.querySelector(".dropbtn").onclick = () => 
{
    const dropdown = document.getElementById("myDropdown");
    
    if((dropdown.style.display !== "block") 
        ? dropdown.style.display = "block" 
        : dropdown.style.display = "none");
}

// Disparition du menu lors d'un clic d'un lien
const menu = document.querySelector("#myDropdown");
const lienMenu = document.querySelectorAll("#myDropdown a");

for(let i = 0; i < lienMenu.length; i++)
{
    lienMenu[i].onclick = () =>
    {   
        menu.style.display = "none";
    }
}

// Disparition du menu lors du clic appuyé d'autre part que le menu
document.addEventListener("mouseup", (e) =>
{
    const menuBouton = document.querySelector(".dropbtn");
    const iconeBouton = menuBouton.querySelector('.fa-bars'); 
    const contenu = document.querySelector("#myDropdown");

    if(e.target !== menuBouton && e.target !== iconeBouton)
    {
        contenu.style.display = "none";
    }
});


(() =>
{ 
    const video = document.getElementById("video");
    
    video.play();
    
    video.addEventListener("ended", () =>
    {
        setTimeout(() =>
        {
            video.play();
        }, 2500);
    });
})();


// Liste des tâches
const listesConteneur = document.querySelector('[data-listes]')
const nouvelleListe = document.querySelector('[data-liste-formulaire]')
const nouvelleListeChamp = document.querySelector('[data-liste-champ]')
const nouvelleListeChamp2 = document.querySelector('[data-liste-champ2]')
const supprimerListe = document.querySelector('[data-supprimer-liste]')
const listeContenu = document.querySelector('[data-liste-contenu]')
const listeTitre = document.querySelector('[data-liste-titre]')
const listeSousTitre = document.querySelector('[data-liste-sous-titre]')
const tachesConteneur = document.querySelector('[data-taches]')
const tacheTemplate = document.getElementById('tache-template')
const nouvelleTache = document.querySelector('[data-tache-formulaire]')
const nouvelleTacheChamp = document.querySelector('[data-tache-champ]')
const effacerTaches = document.querySelector('[data-supprimer-tache]')

const LOCAL_STORAGE_LIST_KEY = 'tache.listes'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'tache.selectionneListeId'
let listes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectionneListeId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

listesConteneur.addEventListener('click', e => 
{
    if(e.target.tagName.toLowerCase() === 'li')
    {
        selectionneListeId = e.target.dataset.listeId
        sauvegardeEtRendu()
    }
})

tachesConteneur.addEventListener('click', e => 
{
    if(e.target.tagName.toLowerCase() === 'input')
    {
        const selectionneListe = listes.find(liste => liste.id === selectionneListeId)
        const selectionneTache = selectionneListe.taches.find(tache => tache.id === e.target.id)
        selectionneTache.complete = e.target.checked
        sauvegarde()
    }
})

effacerTaches.addEventListener('click', e =>
{
    const selectionneListe = listes.find(liste => liste.id === selectionneListeId)
    selectionneListe.taches = selectionneListe.taches.filter(tache => !tache.complete)
    sauvegardeEtRendu()
})

supprimerListe.addEventListener('click', e =>
{
    listes = listes.filter(liste => liste.id !== selectionneListeId)
    selectionneListeId = null
    sauvegardeEtRendu()
})

nouvelleListe.addEventListener('submit', e => 
{
    e.preventDefault()
    const listeNom = nouvelleListeChamp.value
    const listeDescription = nouvelleListeChamp2.value
    if((listeNom == null || listeDescription == null) || (listeNom === '' || listeDescription === ''))
    {
        return
    }
    const liste = creerListe(listeNom, listeDescription)
    nouvelleListeChamp.value = null
    nouvelleListeChamp2.value = null
    listes.push(liste)
    sauvegardeEtRendu()
})

nouvelleTache.addEventListener('submit', e => 
{
    e.preventDefault()
    const tacheNom = nouvelleTacheChamp.value
    if(tacheNom == null || tacheNom === '')
    {
        return
    }
    const tache = creerTache(tacheNom)
    nouvelleTacheChamp.value = null
    const selectionneListe = listes.find(liste => liste.id === selectionneListeId)
    selectionneListe.taches.push(tache)
    sauvegardeEtRendu()
})

function creerListe(nom, description)
{
    return { 
        id: Date.now().toString(),
        nom: nom,
        description: description,
        taches: []
    }
}

function creerTache(nom)
{
    return { 
        id: Date.now().toString(),
        nom: nom,
        complete: false
    }
}

function sauvegardeEtRendu()
{
    sauvegarde()
    rendu()
}

function sauvegarde()
{
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(listes))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectionneListeId)
}

function rendu()
{
    effacerElement(listesConteneur)
    renduListes()

    const selectionneListe = listes.find(liste => liste.id == selectionneListeId)
    if(selectionneListe == undefined)
    {
        listeContenu.style.display = 'none'
    }
    else
    {
        listeContenu.style.display = ''
        listeTitre.innerText = selectionneListe.nom
        listeSousTitre.innerText = selectionneListe.description
        effacerElement(tachesConteneur)
        renduTaches(selectionneListe)
    } 
}

function renduTaches(selectionneListe)
{
    selectionneListe.taches.forEach(tache => 
    {
        const tacheElement = document.importNode(tacheTemplate.content, true)
        const checkbox = tacheElement.querySelector('input[type="checkbox"]')
        checkbox.id = tache.id
        checkbox.checked = tache.complete
        const label = tacheElement.querySelector('label')
        const inputText = tacheElement.querySelector('input[type="text"]')
        label.htmlFor = tache.id
        label.append(tache.nom)
        tachesConteneur.appendChild(tacheElement)
    })
}

function renduListes()
{
    listes.forEach(liste => 
    {
        const listeElement = document.createElement('li')
        listeElement.dataset.listeId = liste.id
        listeElement.classList.add("list-name")
        listeElement.innerText = liste.nom
        if(liste.id === selectionneListeId)
        {
            listeElement.classList.add("active-list")
        }
        listesConteneur.appendChild(listeElement)
    })
}

function effacerElement(element)
{
    while(element.firstChild)
    {
        element.removeChild(element.firstChild)
    }
}

rendu()


$("#envoyer").ready(function()
{
    $('#envoyer').click(function(e)
    {
        e.preventDefault();
        $.ajax(
        {
            dataType: "JSON",
            url: "sendmail.php",
            type: "POST",
            data: $("#mail").serialize(), // "serialize()" : encode plusieurs éléments d'un formulaire en chaîne de caractères à envoyer
            beforeSend: function(xhr)
            {
                $("#etat").css("opacity", "1");
                $("#etat").html('<br><div class="case_dialog"><div class="orangemsg"><i class="fas fa-spinner"></i>&nbsp; Envoi en cours...</div></div>');
            },
            // Paramètre "response" reçoit un objet, ici clé avec valeur de $donnees dans "sendmail.php"
            success: function(response)
            {
                if(response)
                {
                    //console.log(response);
                    if(response['statut'] == 'bon')
                    {
                        $('#etat').animate({"opacity": "0"}, 300, function()
                        {
                            $(this).html('<br><div class="case_dialog"><div class="greenmsg"><i class="fas fa-check-circle"></i>&nbsp; '+ response['info'] +'</div></div>').animate({ opacity: 1 });
                            $(this).html('<br><div class="case_dialog"><div class="greenmsg"><i class="fas fa-check-circle"></i>&nbsp; '+ response['info'] +'</div></div>').delay(5000).animate({ opacity: 0 });
                        });
                        // Supprimer chaque champ après validation (succès)
                        $('#nom, #email, #message').each(function()
                        {
                            $(this).val('');
                        });
                        $('#nom, #email').css("box-shadow", "inset -6px 0 0 0 black");
                        $('#caracteres').html('<span id="caracteres"><b>500</b>&nbsp;caractères restants</span>');
                    }
                    else
                    {
                        $('#etat').animate({"opacity": "0"}, 300, function()
                        {
                            $(this).html('<br><div class="case_dialog"><div class="redmsg"><i class="fas fa-exclamation-triangle"></i>&nbsp; '+ response['info'] +'</div></div>').animate({ opacity: 1 });
                        });
                    }
                }
            },
            error: function()
            {
                $('#etat').animate({"opacity": "0"}, 300, function()
                {
                    $(this).html('<br><div class="case_dialog"><div class="redmsg"><i class="fas fa-exclamation-triangle"></i>&nbsp; Erreur lors de l\'envoi de votre message !</div></div>').animate({ opacity: 1 });
                });
            },
            complete: function()
            {
                $('#envoyer').html("Envoyer le message");
            }
        });
    });
});
  
