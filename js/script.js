// Chaque résolution
if(window.matchMedia("(min-width: 200px) and (max-width: 767px)").matches) 
{
    $(document).ready(function() 
    {
        $('.menu').on('click', function() // "on" : écoute de plusieurs événements
        {
            // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 800; // Durée de l'animation (en ms)
            $('html, body').animate(
            { 
                scrollTop: $(page).offset().top - 39
            }
            , speed); // Go
            return false;
        });
    }); 
    
    $(window).scroll(function(e)
    {
        var scrollPos = $(document).scrollTop() + 45;
        $('#myDropdown a').each(function()
        {
            var refElement = $($(this).attr("href"));
            // Si la position du lien au début est inférieure ou égale au début du bloc et que la position du lien au début + la hauteur du lien est supérieure au début du bloc
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
    
    
    $(".hide-menu, .hide-brand1, .hide-brand2").css('visiblility', 'hidden');

     // Animation texte des blocs "menu" et "branding"
    $(".hide-menu").textillate(
    {
        initialDelay: 500,
        in: 
        {
            effect: 'fadeInDown', 
            sync: true, 
            delay: 25
        }
    });

    $(".hide-brand1").textillate(
    {
        initialDelay: 1000,
        in: 
        {
            effect: 'fadeInLeft', 
            sequence: true, 
            delay: 40
        }
    });

    $(".hide-brand2").textillate(
    {
        initialDelay: 1000,
        in: 
        {
            effect: 'fadeInLeft', 
            sequence: true, 
            delay: 20
        }
    });

    
    $(".profile").css({"opacity": "0", "top": "-50px"});
    $(".course").css({"opacity": "0", "top": "-50px"});
    $(".projets").css({"opacity": "0", "top": "-50px"});
    $(".contact").css({"opacity": "0", "top": "-50px"});
    
    // Effet de fondu chaque bloc
    $("#about").hover(function()
    {
        $(".profile").delay(300).animate({opacity: 1, top: 0}, 800);
    });
    $("a#abo").click(function()
    {
        $(".profile").delay(700).animate({opacity: 1, top: 0}, 800);
    });

    $("#course").hover(function()
    {
        $(".course").delay(300).animate({opacity: 1, top: 0}, 800);
    });
    $("a#cou").click(function() 
    {
        $(".course").delay(700).animate({opacity: 1, top: 0}, 800);
    });

    $("#projets").hover(function()
    {
        $(".projets").delay(300).animate({opacity: 1, top: 0}, 800);
    });
    $("a#pro").click(function()
    {
        $(".projets").delay(700).animate({opacity: 1, top: 0}, 800);
    });

    $("#contact").hover(function()
    {
        $(".contact").delay(300).animate({opacity: 1, top: 0}, 800);
    });
    $("a#con").click(function()
    {
        $(".contact").delay(700).animate({opacity: 1, top: 0}, 800);
    });
    
    
    // Parallax des fonds
    var parallax = skrollr.init();
    // Actualise le plugin après redimensionnement des sections
    parallax.refresh($('.homeslide'));

}


document.getElementById("nom").addEventListener("input", function(e) 
{
    var test = e.target.value;
    var nom = document.getElementById("nom");

    if(test.length == 0)
    {
        nom.style.boxShadow = "inset -6px 0 0 0 black";
    }
    else if(test.length <= 2) 
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

    else if(e.target.value.indexOf("@") === -1 && e.target.value.length > 0) 
    {
        email.style.boxShadow = "inset -6px 0 0 0 #ff0000";
    }
    else
    {
        email.style.boxShadow = "inset -6px 0 0 0 #00ff0a";
    }
});

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
        }, 3000);
    });
});



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
  
