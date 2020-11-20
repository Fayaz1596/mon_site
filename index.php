<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fayaz A.M.</title>
        <link rel="icon" href="img/favlogo.png"/>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/style_tablette.css">
        <link rel="stylesheet" href="css/style_portable.css">
        <link rel="stylesheet" href="css/animate.css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
        <script src="https://kit.fontawesome.com/a8b6ce1f83.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <!-- Nav -->
        <div class="roof">
            <div class="nav-main">
                <div class="logo">
                    <a href="http://fayazprojetweb.byethost32.com/"><img src="img/logo.png" alt="logo"></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#header-main" class="menu active hide-menu">Accueil</a></li>
                        <li><a href="#about" class="menu hide-menu" id="abo">À propos</a></li>
                        <li><a href="#course" class="menu hide-menu" id="cou">Parcours</a></li>
                        <li><a href="#projets" class="menu hide-menu" id="pro">Projets</a></li>
<!--                        <li><a href="#taches" class="menu hide-menu" id="tac">Tâches</a></li>-->
                        <li><a href="#contact" class="menu hide-menu" id="con">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="dropdown">
                <div class="logo">
                    <a href="http://fayazprojetweb.byethost32.com/"><img src="img/logo.png" alt="logo"></a>
                </div>
                <div class="button">
                    <button class="dropbtn"><i class="fas fa-bars"></i></button>
                </div>
                <div id="myDropdown" class="dropdown-content">
                    <div class="dropdown-before">
                        <a href="#header-main" class="menu active">Accueil</a>
                        <a href="#about" class="menu">À propos</a>
                        <a href="#course" class="menu">Parcours</a>
                        <a href="#projets" class="menu">Projets</a>
<!--                        <a href="#taches" class="menu">Tâches</a>-->
                        <a href="#contact" class="menu">Contact</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Header -->
        <header id="header-main">
            <img src="img/fond.jpg" class="header-img"/>
            <div id="videoDiv">
                <video muted id="video">
                    <source src="intro.mp4" type="video/mp4">
                </video>
            </div>
            <div class="container branding">
                <h1 class="hide-brand1">Bienvenue sur mon site personnel !</h1>
                <h1 class="hide-brand2">Vous retrouverez mes contenus sur plusieurs sections me concernant.</h1>
            </div>
        </header>

        <!-- Main -->
        <main>
            <!-- Profile -->
            <section id="about">
                <div class="container profile">
                    <i class="fas fa-info-circle fa-2x"></i>
                    <h2>À propos de moi</h2>
                    <p class="image">
                        <a href="https://fr.linkedin.com/in/bavasahib-abdoulvahide-44147517b" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </p>
                    <p>Je m'appelle Bavasahib, j'ai 24 ans et je suis en Île-de-France.</p>
                    <p>Je suis étudiant et passionné par le développement web depuis 3 ans, précisément sur du développement front-end que back-end.</p>
                    <img src="img/signature.png" alt="signature">
                </div>
            </section>

            <!-- Course -->
            <section id="course" class="parallax parallax-one">
                <div class="container course">
                    <i class="fas fa-graduation-cap fa-2x"></i>
                    <h2>Mon parcours</h2>
                    <p>J'ai eu un Baccalauréat Technologique en STI2D, un BTS option SN-IR (Systèmes Numériques - Informatique & Réseaux) de niveau bac+2 et une licence professionnelle en développement, systèmes d'information et ERP de niveau bac+3.</p>
                    <p>J'ai codé un projet pour la gestion de liste de tâches en front et en back, un petit projet pour récupérer 2 listes depuis des API, la refonte de 2 sites web en front pour une entreprise et enfin mon site personnel qui est hébergé ici-même.</p>
                    <br>
                    <div class="titre">
                        <p>Compétences des langages appris :</p> 
                    </div>
                    <div class="competences">
                        <div>
                            <div class="intitule">
                                <i class="fas fa-globe" style="color: white;"></i>
                                <span>Web</span>
                            </div>
                            <article class="web">
                                <div class="lanw">
                                    <i class="fab fa-html5" style="color: #e34f26;"></i>
                                    <p>HTML</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-css3-alt" style="color: #2565ae;"></i>
                                    <p>CSS</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                                    <p>JavaScript</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-php" style="color: #8892be;"></i>
                                    <p>PHP</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-angular" style="color: #b52e31;"></i>
                                    <p>Angular</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-bootstrap" style="color: #602c50;"></i>
                                    <p>Bootstrap</p>
                                </div>
                                <div class="lanw">
                                    <i class="fab fa-react" style="color: #00d8ff;"></i>
                                    <p>ReactJS</p>
                                </div>                                
                                <div class="lanw">
                                    <img src="img/bulma.png" class="fa-bulma">
                                    <p>Bulma</p>
                                </div> 
                                <div class="lanw">
                                    <i class="fab fa-sass" style="color: #cd6799;"></i>
                                    <p>SCSS</p>
                                </div>                                
                                <div class="lanw">
                                    <img src="img/express.png" class="fa-express">
                                    <p>Express.js</p>
                                </div>
                            </article>
                        </div>
                        <div>
                            <div class="intitule">
                                <i class="fas fa-code" style="color: white;"></i>
                                <span>Logiciel</span>
                            </div>
                            <article class="logiciel">
                                <div class="lanp">
                                    <i class="fab fa-java" style="color: #eD8b00;"></i>
                                    <p>Java</p>
                                </div>
                                <div class="lanp">
                                    <i class="fab fa-android" style="color: #a4c639;"></i>
                                    <p>Android</p>
                                </div>
                                <div class="lanp">
                                    <img src="img/csharp.png" class="fa-csharp">
                                    <p>C#</p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <button onclick="window.open('cv/MonCV.pdf');" class="consulter">Consulter mon CV</button>
                </div>
            </section>

            <!-- Projets -->
            <section id="projets">
                <div class="container projets">
                    <div class="titre">
                        <i class="fas fa-pen-square fa-2x"></i>
                        <h2>Mes projets</h2>
                        <p>Voici une liste de projets réalisés que j'ai mis sur la plateforme GitHub :</p> 
                    </div>
                    <div class="category">
                        <article class="liste">
                            <div class="nom">
                                <a href="https://github.com/Fayaz1596/liste_taches" target="_blank">
                                    <div>
                                        <i class="fas fa-link" style="color: white;"></i>
                                        <h3>Gestionnaire de tâches</h3>
                                    </div>
                                    <div>
                                        <span>Bulma</span>
                                        <span>SCSS</span>
                                        <span>Angular</span>
                                        <span>Express.js</span>
                                    </div>
                                </a>
                            </div>
                        </article>                        
                        <article class="liste">
                            <div class="nom">
                                <a href="https://github.com/Fayaz1596/projet_listes" target="_blank">
                                    <div>
                                        <i class="fas fa-link" style="color: white;"></i>
                                        <h3>Listes d'éléments depuis API</h3>
                                    </div>
                                    <div>
                                        <span>Bootstrap</span>
                                        <span>Angular</span>
                                    </div>
                                </a>
                            </div>
                        </article>
                        <article class="liste">
                            <div class="nom">
                                <a href="https://github.com/Fayaz1596/speedtarif" target="_blank">
                                    <div>
                                        <i class="fas fa-link" style="color: white;"></i>
                                        <h3>Interface pour SpeedTarif</h3>
                                    </div>
                                    <div>
                                        <span>HTML/CSS</span>
                                        <span>Javascript</span>
                                        <span>jQuery</span>
                                    </div>
                                </a>
                            </div>
                        </article>
                        <article class="liste">
                            <div class="nom">
                                <a href="https://github.com/Fayaz1596/extranet" target="_blank">
                                    <div>
                                        <i class="fas fa-link" style="color: white;"></i>
                                        <h3>Interface pour SpeedTarif (extranet)</h3>
                                    </div>
                                    <div>
                                        <span>Bootstrap</span>
                                        <span>Javascript</span>
                                        <span>jQuery</span>
                                    </div>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div class="youtube">
                        <a href="https://github.com/Fayaz1596" class="voir" target="_blank">
                        Voir tous mes projets</a>
                    </div>
                </div>
            </section>

            <!-- Tâches -->
<!--
            <section id="taches">
                <div class="container taches">
                    <div class="titre">
                        <i class="fas fa-tasks fa-2x"></i>
                        <h2>Ma liste des tâches</h2>
                    </div>
                    <div class="liste_taches">
                        <div class="all-tasks">
                            <div>
                                <div class="list-header">
                                    <h3 class="task-list-title">Liste</h3>
                                </div>
                                <ul class="task-list list-scrollbar" data-listes></ul>
                                <form action="" data-liste-formulaire>
                                    <div>
                                        <input type="text" class="new list" placeholder="Nouveau titre" data-liste-champ/>
                                        <input type="text" class="new list" placeholder="Nouveau sous-titre" data-liste-champ2/>
                                    </div>
                                    <div>
                                        <button class="btn create">+</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="todo-list" data-liste-contenu>
                            <div>
                                <div class="todo-header">
                                    <h3 class="list-title" data-liste-titre></h3> 
                                    <h4 class="list-subtitle" data-liste-sous-titre></h4>
                                </div>
                                <div class="todo-body">
                                    <div class="tasks task-scrollbar" data-taches></div>
                                    <div class="new-task-creator">
                                        <form action="" data-tache-formulaire> 
                                            <input type="text" class="new task" placeholder="Nouvelle tâche" data-tache-champ/>
                                            <button class="btn create">+</button>
                                        </form>
                                    </div>
                                    <div class="delete-stuff">
                                        <button class="btn delete" data-supprimer-tache>Effacer les tâches terminées</button>
                                        <button class="btn delete" data-supprimer-liste>Supprimer la liste</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <template id="tache-template">
                        <div class="task">
                            <input type="checkbox"/>
                            <label>
                                <span class="custom-checkbox"></span>
                            </label>
                            <button class="btn edit">Modifier</button>
                        </div>
                    </template>
                </div>
            </section>
-->

            <!-- Contact -->
            <section id="contact">
                <div class="container">
                    <form id="mail">
                        <div class="contact">
                            <i class="fas fa-address-card"></i>
                            <h2>Me contacter</h2>
                            <p class="texte">
                                Pour toute information, c'est ici :
                            </p>
                            <div class="champ_input">
                                <div>
                                    <input type="text" name="nom" id="nom" placeholder="Nom et prénom" value="" autocomplete="off">
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" placeholder="E-mail" value="" autocomplete="off">
                                </div>
                            </div>
                            <p class="champ">
                                <textarea name="message" id="message" maxlength="500" placeholder="Message" autocomplete="off" onkeyup="compterCaracteres(this)"></textarea>
                                <span id="caracteres">500&nbsp;caractères restants</span>
                            </p>
                            <p class="champ">
                                <button class="submit" id="envoyer">Envoyer le message</button>
                            </p>
                        </div>
                        <div id="etat"></div>
                    </form>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer id="footer-main">
            <div class="container copyright">
                <h4>Tous droits réservés © 2020</h4>
            </div>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/jquery.lettering.js"></script>
        <script src="js/jquery.textillate.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>