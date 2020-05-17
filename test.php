<?php
	$fichier = 'Fichiers/MonCV.pdf';
	 
	// Création des headers, pour indiquer au navigateur qu'il s'agit d'un fichier à télécharger
	header('content-type: application/octet-stream');
	header('Content-Disposition: attachment; filename="MonCV.pdf"'); //Nom du fichier
	header('Content-Length: ' . filesize($fichier)); //Taille du fichier
	header('Pragma: no-cache');
	header('Expires: 0');
	  
	// Envoi du fichier dont le chemin est passé en paramètre
	readfile($fichier);
?>