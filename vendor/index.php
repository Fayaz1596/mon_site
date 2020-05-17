<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <title>Fayaz A.M.</title>
        <link rel="icon" href="img/favlogo.png"/>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="js/animate.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Petit+Formal+Script" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>
    <body>
        <!-- Nav -->
        <div class="roof">
            <div class="nav-main">
                <div class="logo">
                    <a href="http://www.fayazprojetweb.esy.es"><img src="img/logo.png" alt="logo"></a>
                    <!--<h4>BETA</h4>-->
                </div>
                <nav>
                    <ul>
                        <li><a href="#header-main" class="menu active">Accueil</a></li>
                        <li><a href="#about" class="menu" id="abo">À propos</a></li>
                        <li><a href="#course" class="menu" id="cou">Parcours</a></li>
                        <li><a href="#productions" class="menu" id="pro">Productions</a></li>
                        <li><a href="#evenements" class="menu" id="eve">Événements</a></li>
                        <li><a href="#contact" class="menu" id="con">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div class="dropdown">
                <div class="logo">
                    <a href="http://www.fayazprojetweb.esy.es"><img src="img/logo.png" alt="logo"></a>
                    <!--<h4>BETA</h4>-->
                </div>
                <div class="button">
                    <button class="dropbtn"><i class="fas fa-bars"></i></button>
                </div>
                <div id="myDropdown" class="dropdown-content">
                    <a href="#header-main" class="menu active">Accueil</a>
                    <a href="#about" class="menu" id="m-abo">À propos</a>
                    <a href="#course" class="menu" id="m-cou">Parcours</a>
                    <a href="#productions" class="menu" id="m-pro">Productions</a>
                    <a href="#evenements" class="menu" id="m-eve">Événements</a>
                    <a href="#contact" class="menu" id="m-con">Contact</a>
                </div>
            </div>
        </div>

        <!-- Header -->
        <header id="header-main">
            <div class="container branding">
                <h1 class="hide-tlt1">Bienvenue sur mon site personnel !</h1>
                <h2 class="hide-tlt2">C'est mon site personnel qui détaille mes productions et mon parcours que j'ai fait jusqu'à maintenant.</h2>
            </div>
            <div class="arrow-down">
                <a href="#about"><i class="fas fa-angle-down fa-3x"></i></a>
            </div>
        </header>

        
        <!-- Main -->
        <main>
            <!-- Profile -->
            <section id="about">
                <div class="container">
                    <div class="profile">
                        <i class="fas fa-info-circle fa-2x"></i>
                        <h1>À propos de moi</h1>
                        <p>Salut ! Je m'appelle Bavasahib, j'ai 22 ans et je suis en Île-de-France.</p>
                        <p>Je suis un développeur/intégrateur web junior avec 2 ans d'expérience (en front).</p>
                        <img src="img/signature.png" alt="signature">
                    </div>
                </div>
            </section>

            <!-- Course -->
            <section id="course">
                <div class="container">
                    <div class="course">
                        <i class="fas fa-graduation-cap fa-2x"></i>
                        <h1>Mon parcours</h1>
                        <p>Auparavant, j'ai eu un Baccalauréat Technologique en STI2D. Jusqu'à maintenant, j'ai réussi mon BTS option SN-IR (Systèmes Numériques - Informatique & Réseaux) avec le grade Bac+2.</p>
                        <p>Récemment, j'ai créé mon portfolio sur mon site qui est hébergé actuellement, puis j'ai notamment fait un site pour espace membres (partiellement fini) pour un projet web et enfin j'ai aussi créé un site pour un projet de domotique en 2ème année de BTS qui était mon tout premier site.</p>
                        <br>
                        <div class="titre">
                            <p>Compétences des langages web :</p> 
                        </div>
                        <div class="competences">
                            <div class="html">
                                <p>HTML</p>
                                <progress value="40" max="50"></progress>
                            </div>
                            <div class="css">
                                <p>CSS</p>
                                <progress value="35" max="50"></progress>
                            </div>
                            <div class="js">
                                <p>JavaScript</p>
                                <progress value="20" max="50"></progress>
                            </div>
                            <div class="php">
                                <p>PHP</p>
                                <progress value="15" max="50"></progress>
                            </div>
                            <div class="mysql">
                                <p>MySQL/PDO</p>
                                <progress value="10" max="50"></progress>
                            </div>
                            <div class="jqu">
                                <p>jQuery</p>
                                <progress value="20" max="50"></progress>
                            </div>
                            <div class="symf">
                                <p>Symfony 3</p>
                                <progress value="10" max="50"></progress>
                            </div>
                            <div class="anjs">
                                <p>AngularJS</p>
                                <progress value="5" max="50"></progress>
                            </div>
                        </div>
                        <button onclick="window.open('cv/MonCV.pdf');" class="consulter">Consulter mon CV</button>
                    </div>
                </div>
            </section>

            <!-- Productions -->
            <section id="productions">
                <div class="container">
                    <div class="title">
                        <i class="fas fa-video fa-2x"></i>
                        <h1>Productions</h1>
                        <p>Dernières vidéos en ligne jusqu'à maintenant :</p> 
                    </div>
                    <div class="category">
                        <article class="item-productions">
                            <div>
                                <a href="https://www.youtube.com/watch?v=un7fw7rJh0U" target="_blank"><img src="img/hqdefault1.jpg" alt="art">
                                    <section class="productions-txt">
                                        <h2>[PC] Starsky & Hutch | Épisode 1 : Voitures rapides (Épisode 1, Saison 1)</h2>
                                        <br><h3>12/09/2016</h3>
                                    </section>
                                </a>
                            </div>
                        </article>
                        <article class="item-productions">
                            <div>
                                <a href="https://www.youtube.com/watch?v=R_zm8ZDDcts" target="_blank"><img src="img/hqdefault2.jpg" alt="art">
                                    <section class="productions-txt">
                                        <h2>[PC] Starsky & Hutch | Épisode 2 : Repli spécial (Épisode 2, Saison 1)</h2>
                                        <br><h3>25/06/2017</h3>
                                    </section>
                                </a>
                            </div>
                        </article>
                        <article class="item-productions">
                            <div>
                                <a href="https://www.youtube.com/watch?v=SrTZaNAPMo0" target="_blank"><img src="img/hqdefault3.jpg" alt="art">
                                    <section class="productions-txt">
                                        <h2>[Générique] Tennis, Coupe Davis | france•4 (2018) (60 Hz)</h2>
                                        <br><h3>03/02/2018</h3>
                                    </section>
                                </a>
                            </div>
                        </article>
                        <article class="item-productions">
                            <div>
                                <a href="https://www.youtube.com/watch?v=TmzRBVRWSB0" target="_blank"><img src="img/hqdefault4.jpg" alt="art">
                                    <section class="productions-txt">
                                        <h2>[Jingle] Tennis, Coupe Davis | france•4 (2018) (60 Hz)</h2>
                                        <br><h3>04/02/2018</h3>
                                    </section>
                                </a>
                            </div>
                        </article>
                    </div>
                    <div class="data">
                        <div class="titre">
                            <!--<i class="fas fa-folder fa-2x" style="color: black;"></i>
                            <h2>Données</h2>-->
                            <p>Les points importants de ma chaîne en chiffres et en description :</p> 
                        </div>
                        <div class="data-item">
                            <div class="data1">
                                <div class="icon">
                                    <i class="fab fa-youtube"></i>
                                </div>
                                <div class="data-text">
                                    <span>4</span>
                                    <p>vidéos en ligne actuellement</p>
                                </div>
                            </div>
                            <div class="data2">
                                <div class="icon">
                                    <i class="fas fa-file-video"></i>
                                </div>
                                <div class="data-text">
                                    <span>720p</span>
                                    <p>en qualité vidéo HD</p>
                                </div>
                            </div>
                            <div class="data3">
                                <div class="icon">
                                    <i class="fas fa-film"></i>
                                </div>
                                <div class="data-text">
                                    <span>1</span>
                                    <p>logiciel de montage vidéo : After Effects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Événements -->
            <section id="evenements">
                <div class="container">
                    <div class="title">
                        <i class="fas fa-calendar-alt fa-2x"></i>
                        <h1>Événements</h1>
                        <p style="font-style: italic;">En cours de développement...</p> 
                    </div>
                </div>
            </section>

            <!-- Contact -->
            <section id="contact">
                <div class="container">
                    <form id="mail">
                        <div class="contact">
                            <i class="fas fa-address-card fa-2x"></i>
                            <h1>Me contacter</h1>
                            <p class="texte">
                                Vous pouvez me suivre sur mon profil :
                            </p>
                            <p class="image">
                                <a href = "https://fr.linkedin.com/in/bavasahib-abdoulvahide-2943b314a" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href = "http://fr.viadeo.com/fr/profile/bavasahib.abdoulvahide" target="_blank">
                                    <i class="fab fa-viadeo-square"></i>
                                </a>
                            </p>
                            <p class="champ">
                                <input type="text" name="nom" id="nom" placeholder="Votre nom (Exemple)" value="">
                            </p>
                            <p class="champ">
                                <input type="email" name="email" id="email" placeholder="Votre e-mail (exemple@exemple.fr)" value="">
                            </p>
                            <p class="champ">
                                <textarea name="message" id="message" maxlength="258" placeholder="Votre message"></textarea>
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
                    <h3>Tous droits réservés © 2018</h3>
                </div>
            </div>
        </footer>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="js/jquery.parallax-1.1.3.js"></script>
        <script src="js/jquery.lettering.js"></script>
        <script src="js/jquery.textillate.js"></script>
        <script src="script.js"></script>
    </body>
</html>