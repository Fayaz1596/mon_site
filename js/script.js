// Chaque résolution
if(window.matchMedia("(min-width: 200px) and (max-width: 767px)").matches) 
{
    $(document).ready(function() 
    {
        $('.menu').on('click', function()
        {
            // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 800; // Durée de l'animation (en ms)
            $('html, body').animate(
            { 
                scrollTop: $(page).offset().top - 39
            }
            , speed);
            return false;
        });
    }); 
    
    $(window).scroll(function(e)
    {
        var scrollPos = $(document).scrollTop() + 45;
        $('#myDropdown a').each(function()
        {
            var refElement = $($(this).attr("href"));
            // Si la valeur de la position de la fenêtre est inférieure à la valeur du défilement et que si la valeur de cette fenêtre + la valeur totale de la hauteur d'un bloc est supérieure à la valeur du défilement
            // Si le bloc ne sort pas vers le haut et vers le bas
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) 
            {
                $(this).addClass("active");
            }
            else
            {
                $(this).removeClass("active");
            }
        });
    });
    
    
}
else if(window.matchMedia("(max-width: 1023px)").matches) 
{
    $(document).ready(function() 
    {
        $('.menu').on('click', function() 
        { 
            var page = $(this).attr('href');
            var speed = 800;
            $('html, body').animate(
            { 
                scrollTop: $(page).offset().top - 54
            }
            , speed)
            return false;
        });
    });
    
    $(window).scroll(function(e)
    {
        var scrollPos = $(document).scrollTop() + 55;
        $('#myDropdown a').each(function() 
        {
            var refElement = $($(this).attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) 
            {
                $(this).addClass("active");
            }
            else
            {
                $(this).removeClass("active");
            }
        });
    });
}
else
{
    window.onload = function()
    {
        if(!window.location.hash)
        {
            window.location = window.location + "#.";
            window.location.reload();
        }
    }

    $(document).ready(function()
    {
        $('.menu').on('click', function() 
        { 
            var page = $(this).attr('href');
            var speed = 800;
            $('html, body').animate(
            { 
                scrollTop: $(page).offset().top - 66
            }
            , speed);
            return false;
        });
    });

    $(window).on("scroll mouseover", function(e)
    {
        var scrollPos = $(document).scrollTop() + 70;
        $('nav ul li a').each(function() 
        {
            var refElement = $($(this).attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) 
            {
                $(this).addClass("active");
            }
            else
            {
                $(this).removeClass("active");
            }
        });
    });

    
    $(".profile").css({"opacity": "0", "top": "-50px"});
    $(".course").css({"opacity": "0", "top": "-50px"});
    $(".projets").css({"opacity": "0", "top": "-50px"});
    $(".taches").css({"opacity": "0", "top": "-50px"});
    $(".contact").css({"opacity": "0", "top": "-50px"});
    
    // Effet de fondu chaque bloc
    $("#about").hover(function()
    {
        $(".profile").delay(150).animate({opacity: 1, top: 0}, 500);
    });
    $("a#abo").click(function()
    {
        $(".profile").delay(650).animate({opacity: 1, top: 0}, 500);
    });

    $("#course").hover(function()
    {
        $(".course").delay(150).animate({opacity: 1, top: 0}, 500);
    });
    $("a#cou").click(function() 
    {
        $(".course").delay(650).animate({opacity: 1, top: 0}, 500);
    });

    $("#projets").hover(function()
    {
        $(".projets").delay(150).animate({opacity: 1, top: 0}, 500);
    });
    $("a#pro").click(function()
    {
        $(".projets").delay(650).animate({opacity: 1, top: 0}, 500);
    });

    $("#taches").hover(function()
    {
        $(".taches").delay(150).animate({opacity: 1, top: 0}, 500);
    });
    $("a#tac").click(function()
    {
        $(".taches").delay(650).animate({opacity: 1, top: 0}, 500);
    });

    $("#contact").hover(function()
    {
        $(".contact").delay(150).animate({opacity: 1, top: 0}, 500);
    });
    $("a#con").click(function()
    {
        $(".contact").delay(650).animate({opacity: 1, top: 0}, 500);
    });
    
    
    // Parallax des fonds
    var parallax = skrollr.init();
    // Actualise le plugin après redimensionnement des sections
    parallax.refresh($('.homeslide'));

}


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
});

$(".hide-brand2").textillate(
{
    initialDelay: 800,
    in: 
    {
        effect: 'fadeInUp', 
        sequence: true, 
        delay: 10
    }
});


document.getElementById("nom").addEventListener("input", function(e) 
{
    var nom = document.getElementById("nom");

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

document.getElementById("email").addEventListener("input", function(e)
{
    var email = document.getElementById("email");

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
    var textarea = document.getElementById("caracteres");
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


$(".dropbtn").click(function() // Affichage du menu
{
    $("#myDropdown").toggle();
});

$("#myDropdown a").click(function() // Disparition du menu lors d'un clic d'un lien
{
    $("#myDropdown").hide();
});

$(document).on("mouseup touchend", function(e) // Disparition du menu lors du clic appuyé d'autre part que le menu
{
    var contenu = $("#myDropdown, .dropbtn");
    // if the target of the click isn't the container ... or a descendant of the container
    if (!contenu.is(e.target) && contenu.has(e.target).length === 0) 
    {
        $("#myDropdown").hide();
    }
});


// Si la vidéo est visible, alors changer l'attribut "data-src" en "src" et lancer 1ère élément DOM de la vidéo
/*$(function()
{
    var video = $('#video');

    if(video.is(':visible'))
    {
        $('source', video).each(function()
        {
            var test = $(this);
            test.attr('src', test.data('src'));
        });
        
        
    }
});*/

$(function()
{ 
    var video = $('#video');

    video[0].play();

    video.bind("ended", function()
    {
        setTimeout(function()
        {
            video[0].play();
        }, 2500);
    });
});


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
    if(selectionneListeId == null)
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
        const checkbox = tacheElement.querySelector('input')
        checkbox.id = tache.id
        checkbox.checked = tache.complete
        const label = tacheElement.querySelector('label')
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
  
