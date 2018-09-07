<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=chapters;charset=utf8', 'root', 'pangot');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage('Impossible de se connecter à la base de données'));
};

$pseudonyme = $_POST['pseudonyme'];
$email = $_POST['eMail'];
$mdp = $_POST['mdp'];

$req = $bdd->prepare('INSERT INTO identifiants (pseudonyme, email, mdp) VALUES (:pseudonyme, :email, :mdp)');
$req->execute(array(
    'pseudonyme' => $pseudonyme,
    'email' => $email,
    'mdp' => $mdp
    ));

echo 'Vous êtes désormais inscrit !';


?>