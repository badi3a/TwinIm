 1. Développer le module utilisateur
 Inscription :
 o Création d'un formulaire d'inscription 
o Valider les données en suivant les critères :
 Email au format valide.
 Mot de passe avec au moins 6 caractères.
 o Sauvegarder les données de l'utilisateur avec le json-server-auth
 Login :
 o Création d'un formulaire de connexion avec les champs :
 email
 Mot de passe.
 o Utiliser le json-auth server pour l’authentification
 o En fonction du rôle de l'utilisateur :
 Si le rôle est userSimple, rediriger l'utilisateur vers une page de profil 
personnel affichant un message de bienvenue.
Si le rôle est admin, rediriger l'utilisateur vers un dashboard Admin.
 2. Développer l'interface du dashboard Admin
Fonctionnalité attendue :
 o Afficher une table listant tous les utilisateurs inscrits, avec les informations 
suivantes :
Nom d'utilisateur.
Email.
 Rôle.