<?php

try
{
	$bdd = new PDO('mysql:host=localhost;dbname=chapters;charset=utf8', 'root', 'pangot');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage('Impossible de se connecter à la base de données'));
};
$req = $bdd->query('SELECT * FROM chapitres');
$chapitres = $req->fetchAll();
echo json_encode($chapitres);

?>