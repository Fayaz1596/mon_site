$(".hide-tlt1").css('visiblility', 'hidden');
$(".hide-tlt2").css('visiblility', 'hidden');
 // Animation texte du bloc "branding"
$(".hide-tlt1").textillate(
{
    initialDelay: 250,
    in: 
    {
        effect: 'fadeIn', 
        sequence: true, 
        delay: 30
    }
});
$(".hide-tlt2").textillate(
{
    initialDelay: 250,
    in: 
    {
        effect: 'fadeIn', 
        sequence: true, 
        delay: 10
    }
});

// Chaque résolution
if(window.matchMedia("(min-width: 200px) and (max-width: 800px)").matches) 
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
else if(window.matchMedia("(max-width: 1152px)").matches) 
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
                scrollTop: $(page).offset().top
            }
            , speed);
            return false;
        });
    });

    $(window).on("scroll mouseover", function(e)
    {
        var scrollPos = $(document).scrollTop() + 68;
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
    
    // Parallax des fonds
    $(document).ready(function()
    {		
       $('#header-main').parallax();
       $('#course').parallax();
       $('#productions').parallax();
       $('#evenements').parallax();
    });

    /*$(".profile").css('display', 'none');
    $(".course").css('display', 'none');
    $("#productions .container").css('display', 'none');
    $("#contact .container").css('display', 'none');

    // Effet de fondu chaque bloc
    $("#about").hover(function()
    {
        $(".profile").delay(400).fadeIn(500);
    });
    $("a#abo, a#m-abo").click(function()
    {
        $(".profile").delay(900).fadeIn(500);
    });

    $("#course").hover(function()
    {
        $(".course").delay(400).fadeIn(500);
    });
    $("a#cou, a#m-cou").click(function() 
    {
        $(".course").delay(900).fadeIn(500);
    });

    $("#productions").hover(function()
    {
        $("#productions .container").delay(400).fadeIn(500);
    });
    $("a#pro, a#m-pro").click(function()
    {
        $("#productions .container").delay(900).fadeIn(500);
    });

    $("#contact").hover(function()
    {
        $("#contact .container").delay(500).fadeIn(500);
    });
    $("a#con, a#m-con").click(function()
    {
        $("#contact .container").delay(1000).fadeIn(500);
    });*/
}

document.getElementById("nom").addEventListener("input", function(e) 
{
    var test = e.target.value;
    var nom = document.getElementById("nom");

    if(test.length == 0)
    {
        nom.style.boxShadow = "inset -6px 0 0 0 black";
    }
    else if(test.length <= 3) 
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

$(".dropbtn").click(function() // Affichage du menu en fondu
{
    $("#myDropdown").toggle();
});

$("#myDropdown a").click(function() // Disparition du menu en fondu lors d'un clic d'un lien
{
    $("#myDropdown").hide();
});

$(document).on("mouseup touchend", function(e) // Disparition du menu en fondu lors du clic appuyé d'autre part que le menu
{
    var contenu = $("#myDropdown, .dropbtn");
    // if the target of the click isn't the container ... or a descendant of the container
    if (!contenu.is(e.target) && contenu.has(e.target).length === 0) 
    {
        $("#myDropdown").hide();
    }
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
  
