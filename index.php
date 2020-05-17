<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fayaz A.M.</title>
        <link rel="icon" href="img/favlogo.png"/>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/style_tablette.css">
        <link rel="stylesheet" href="css/style_portable.css">
        <link rel="stylesheet" href="css/animate.css">
        <link rel="stylesheet" href="css/weather.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Petit+Formal+Script" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
        <script src="https://kit.fontawesome.com/a8b6ce1f83.js" crossorigin="anonymous"></script>
        <meta name="google-site-verification" content="T0orNvOZ3Wq6puiYtMcQDTErb6h0HeiURl7fFY55q8Y" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
    </head>
    <body>
        <!-- Nav -->
        <div class="roof">
            <div class="nav-main">
                <div class="logo">
                    <a href="http://fayazprojetweb.byethost32.com/"><img src="img/logo.png" alt="logo"></a>
                    <!-- <h1>BETA</h1> -->
                </div>
                <nav>
                    <ul>
                        <li><a href="#header-main" class="menu active hide-menu">Accueil</a></li>
                        <li><a href="#about" class="menu hide-menu" id="abo">À propos</a></li>
                        <li><a href="#course" class="menu hide-menu" id="cou">Parcours</a></li>
                        <li><a href="#projets" class="menu hide-menu" id="pro">Projets</a></li>
                        <li><a href="#contact" class="menu hide-menu" id="con">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="dropdown">
                <div class="logo">
                    <a href="http://fayazprojetweb.byethost32.com/"><img src="img/logo.png" alt="logo"></a>
                    <!-- <h1>BETA</h1> -->
                </div>
                <div class="button">
                    <button class="dropbtn"><i class="fas fa-bars"></i></button>
                </div>
                <div id="myDropdown" class="dropdown-content">
                    <div class="dropdown-before">
                        <a href="#header-main" class="menu active">Accueil</a>
                        <a href="#about" class="menu" id="m-abo">À propos</a>
                        <a href="#course" class="menu" id="m-cou">Parcours</a>
                        <a href="#projets" class="menu" id="m-pro">Projets</a>
                        <a href="#contact" class="menu" id="m-con">Contact</a>
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
                <h2 class="hide-brand2">Vous retrouverez mes contenus sur plusieurs sections me concernant.</h2>
            </div>
        </header>

        <!-- Main -->
        <main>
            <!-- Profile -->
            <section id="about">
                <div class="container">
                    <div class="profile">
                        <i class="fas fa-info-circle fa-2x"></i>
                        <h2>À propos de moi</h2>
                        <p class="image">
                            <a href="https://fr.linkedin.com/in/bavasahib-abdoulvahide-44147517b" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </p>
                        <p>Je m'appelle Bavasahib, j'ai 24 ans et je suis en Île-de-France.</p>
                        <p>Je suis étudiant et passionné par le développement web depuis 3 ans, précisément sur de l'intégration/développement front-end.</p>
                        <img src="img/signature.png" alt="signature">
                    </div>
                </div>
            </section>

            <!-- Course -->
            <section id="course" class="homeslide" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -200px;" data-bottom-top="background-position: 50% 200px;">
                <div class="container">
                    <div class="course">
                        <i class="fas fa-graduation-cap fa-2x"></i>
                        <h2>Mon parcours</h2>
                        <p>J'ai eu un Baccalauréat Technologique en STI2D, un BTS option SN-IR (Systèmes Numériques - Informatique & Réseaux) de niveau bac+2 et une licence professionnelle en développement, systèmes d'information et ERP de niveau bac+3.</p>
                        <p>J'ai codé la refonte de 2 sites web pour SpeedTarif et son extranet. De même pour mon site personnel qui est hébergé ici-même. Puis j'ai réalisé un site pour une réservation de logement d'un projet Symfony 3. Ensuite un site pour espace membres d'un projet web. Enfin un site pour un projet de domotique en 2ème année de BTS.</p>
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
                                        <i class="fab fa-css3-alt" style="color: #2565AE;"></i>
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
                                        <i class="fab fa-symfony" style="color: black;"></i>
                                        <p>Symfony 3</p>
                                    </div>
                                    <div class="lanw">
                                        <i class="fab fa-angular" style="color: #b52e31;"></i>
                                        <p>Angular 8</p>
                                    </div>
                                    <div class="lanw">
                                        <i class="fab fa-bootstrap" style="color: #602C50;"></i>
                                        <p>Bootstrap</p>
                                    </div>
                                    <div class="lanw">
                                        <i class="fab fa-laravel" style="color: #f55247;"></i>
                                        <p>Laravel</p>
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
                                        <i class="fab fa-java" style="color: #ED8B00;"></i>
                                        <p>Java</p>
                                    </div>
                                    <div class="lanp">
                                        <i class="fab fa-python" style="color: #4584b6;"></i>
                                        <p>Python</p>
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
                </div>
            </section>

            <!-- Productions -->
            <section id="projets" class="homeslide" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -200px;" data-bottom-top="background-position: 50% 200px;">
                <div class="container">
                    <div class="projets">
                        <div class="titre">
                            <i class="fas fa-pen-square fa-2x"></i>
                            <h2>Mes projets</h2>
                            <p>Voici une liste de projets réalisés que j'ai mis sur la plateforme GitHub :</p> 
                        </div>
                        <div class="category">
                            <article class="liste">
                                <div class="nom">
                                    <a href="https://github.com/Fayaz1596/projet_listes" target="_blank">
                                        <div>
                                            <i class="fas fa-link" style="color: white;"></i>
                                            <h3>Listes d'éléments depuis API</h3>
                                        </div>
                                        <div>
                                            <span>Bootstrap</span>
                                            <span>Angular 8</span>
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
                            <article class="liste">
                                <div class="nom">
                                    <a href="https://github.com/Fayaz1596/reservation" target="_blank">
                                        <div>
                                            <i class="fas fa-link" style="color: white;"></i>
                                            <h3>Réservation de logement</h3>
                                        </div>
                                        <div>
                                            <span>Bootstrap</span>
                                            <span>PHP</span>
                                            <span>Symfony 3</span>
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
                </div>
            </section>

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
                                    <input type="text" name="nom" id="nom" placeholder="Nom et prénom" value="">
                                </div>
                                <div>
                                    <input type="email" name="email" id="email" placeholder="E-mail" value="">
                                </div>
                            </div>
                            <p class="champ">
                                <textarea name="message" id="message" maxlength="500" placeholder="Message"></textarea>
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
            <div class="container">
                <div class="copyright">
                    <h3>Tous droits réservés © 2020</h3>
                </div>
            </div>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/jquery.lettering.js"></script>
        <script src="js/jquery.textillate.js"></script>
        <script src="js/skrollr.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>