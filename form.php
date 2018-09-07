<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=chapters;charset=utf8', 'root', 'pangot');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage('Impossible de se connecter à la base de données'));
};

$titre = $_POST['titre'];
$content = $_POST['content'];
$nom = $_POST['nom'];

$req = $bdd->prepare('INSERT INTO chapitres (titre, content, nom) VALUES (:titre, :content, :nom)');
$req->execute(array(
    'titre' => $titre,
    'content' => $content,
    'nom' => $nom
    ));

echo 'Merci !';


?>