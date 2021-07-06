# 📖 Lexique

**Asynchronism, asynchronisme** : (voir opposé synchronism)
Javascript étant essentiellement single-thread, c'est-à-dire qu'il n'y a qu'un seul fil d'exécution chargé de dérouler 
une à une les opérations planifiées, le recours à l'asynchronisme permet de différer l'exécution d'une tâche, 
à un moment où elle est le moins susceptible de causer des blocages ou des ralentissements 
entraînant une mauvaise expérience utilisateur ( i.e. lorsque la pile d'execution sera vide, en fonction de sa priorité).
[une vidéo de devoxx en français sur la gestion de l'asynchronisme en javascript >>>](https://www.youtube.com/watch?v=OFnSq_0_Pyc)

**Async/await** :  _async_ devant une fonction la déclare asynchrone et elle renverra une _promise_(résultat dans le futur).
_await_ devant son invocation permet d'attendre que la résolution de la _promise_. 
[documentation >>](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Async_await)

**Arrow function, fonction fléchée** : syntaxe plus concise pour définir des fonctions [arrow function >>](https://www.w3schools.com/js/js_arrow_function.asp)

**Bundler** :
améliore les performances d'un projet en compressant le code, en réduisant le nombre de fichiers à un seul, 
et en optimisant les dépendances tout en maintenant l'ordre de chargement.

**Destructuring, Déstructuration, décomposition** : syntaxe pour extraire des valeurs d'un tableau ou d'un objet et les assigner directement à des variables
[déstructuration >>](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

**DOM** : [document object model](https://dom.spec.whatwg.org/) est le modèle d'une page web organisé sous forme d'arbre.

**Event, événement** : événements déclenchés dans le navigateur tels que les clics ou les soumissions de formulaire.

**Immutability, immuabilité** : un objet immuable ne peut changer d'état après sa création. 

**Middleware** : un composant ou un logiciel qui agit comme un pont entre deux composants ou logiciels. 

**Module** : encapsulation de code. Seul le code exporté est accessible si importé dans un autre module.
[ You don't know js : scope-closure  >>](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch8.md)

**Promise** : représente le résultat d'une opération asynchrone éventuellement disponible dans le futur. En effet, cette opération peut échouer, dans ce cas il est retourné la cause de l'échec, ou réussir, 
dans ce cas, la valeur du résultat est accessible dès que la tâche est complétée. 
[You don't know js : promises >>](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md)

**Props** : arguments en entrée d'un composant

**Transpilation** : convertir un code d'un langage vers un autre

**Side effects, effets de bords** : changements de l'état d'une application survenus en dehors de son contexte initial, comme par exemple, 
une fonction qui modifie une variable qu'elle a reçu en paramètre, un appel à une API externe ou encore la génération de nombres aléatoires

**Scope** : ensemble des règles qui régissent comment les références aux variables sont résolues.

**Store** : un modèle qui garde l'état courant des variables partagées entre les différents composants de l'application.

**Spread operator** : syntaxe (...) pour parcourir et recopier des éléments d'un objet ou d'une liste [voir ici >>](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch3.md#iterables)




# 📚 Librairies, Langages, Frameworks

**html** : language de balises permettant de créer la structure  des éléments (liens, images, texte...) à afficher dans un navigateur web 

**javascript** : (ou ECMAScript) langage interprété par les navigateurs. 
Mieux connaître javascript [ You don't know js >> ](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started)

**NodeJs** : environnement d’exécution javaScript construit sur le moteur JavaScript V8 de Chrome.
[nodejs >>](https://nodejs.org/fr/about/)

**React** : bibliothèque  pour créer des interfaces web à base de composants, orienté programmation déclarative
[documentation react >>] (https://fr.reactjs.org/docs/getting-started.html)

**typescript** : langage qui permet le typage dans javascript. Typescript est transpilé vers javascript 
[typescript vs javascript >>](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)




