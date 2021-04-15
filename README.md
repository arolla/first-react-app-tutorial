# Tutoriel 1 - Projet React simple

* [1 - Démarrer un nouveau projet](#step1)
    * [Installer les modules nécessaires](#step1a)
    * [Configurer Babel](#step1b)
    * [Configurer Webpack](#step1c)
    * [Configuration pour faire démarrer l'application](#step1d)
    * [Démarrer l'application](#step1e)    
    * [Réglages de problèmes mineurs d'imports incorrects (facultatif)](#step1f)
* [2 - Créer un composant](#step2)
    * [En tant que fonction](#step2a)
    * [En tant que classe](#step2b)


Le but de ce tutoriel est de découvrir react en construisant une application.



#  <a name="step1"> </a> 🏗️ Etape 1 : Démarrer un nouveau projet react

ℹ️ Ce tutoriel n'utilise pas de solution automatique telle que _create-react-app_ (https://fr.reactjs.org/docs/create-a-new-react-app.html).

## <a name="step1a"> </a>🧱 Installer les modules nécessaires

1. Créer un répertoire à la racine du projet et se placer dedans
2. Télécharger et installer _nodejs_ : https://nodejs.org/en/download/

   👉 Vous pouvez maintenant utiliser le gestionnaire de modules de _NodeJs_ _npm_ (https://www.npmjs.com/).

3. Exécuter `npm init`, répondre aux questions ou laisser vide (configuration par défaut)
   
👉 Un fichier _package.json_ a été créé
4. Installer les modules suivants avec la commande `npm install <nom_module>` (ou `npm i`):
    * webpack webpack-cli webpack-dev-server
      
    * babel-loader babel-preset babel-preset-react @babel/core
      
    * typescript typescript-preset (installer typescript en global  (=disponible pour plusieurs projets)  `npm install -g typescript`)
      
    * react react-dom @types/react @types/react-dom

   👉 un répertoire _node_modules_ est créé qui les contient

##  <a name="step1b"> </a>👷‍♀️ Configurer Babel

ℹ Babel est un transpileur : il permet d'utiliser les dernières implémentations de javascript même si la version du
navigateur client ne le permet pas encore

5. Créer un fichier _babel.config.json_ et entrer :
   ```json
   {
      "presets": [
         ["@babel/preset-env", 
            {
               "targets": { "browsers": ["last 2 chrome versions"] },
               "useBuiltIns": "usage"
            }
         ],
         "@babel/preset-typescript",
         "@babel/preset-react"
      ]
   }
   ```

## <a name="step1c"> </a>📦 Configurer Webpack

ℹ Webpack est un bundler : il regroupe les fichiers javascript en un seul pour optimiser leur utilisation.
_Alternatives :_ gulp makefiles, parcel, rollup

6. Créer un fichier _webpack.config.js_ et entrer :

```ts
const path = require('path');
   module.exports = { 
      entry: './src/index.tsx',
      mode: 'development', 
      output: { 
         path: path.resolve(__dirname, 'dist'), 
         filename: 'arolla-react-example.bundle.js', 
         sourceMapFilename: "todolist.js.map"
      },
   resolve: { extensions: ['.js', '.ts', '.tsx']}, 
   devtool: "source-map", 
   module: { 
      rules: [
         { test: /\.txt$/, use: 'raw-loader' }, 
         { test: /\.tsx?$/, exclude: /node_modules/, use: { loader: "babel-loader"} }
      ]
   } 
};
```
ℹ `path: path.resolve(__dirname, 'dist'),
filename: 'arolla-react-example.bundle.js'` = le bundle nommé _arolla-react-example.bundle.js_ sera dans le répertoire _dist_

ℹ `resolve: { extensions: ['.js', '.ts', '.tsx']}` = extensions de fichiers acceptées .js, .ts, .tsx

ℹ `  { test: /\.tsx?$/, exclude: /node_modules/, use: { loader: "babel-loader"} }` = si mon fichier est un .tsx le traiter avec babel


7. Créer un dossier _dist_ ( = distribution) vide

   ℹ le bundle sera créé dedans lors du build
   

8. Créer un fichier _index.html_, ajouter au moins une balise avec un id et une balise script pointant vers le bundle

 ```html
 <div id="projet"></div>
   <script src="./dist/arolla-react-example.bundle.js"></script>
 ```
ℹ Le div#projet est destiné à contenir l'application

9. Dans le _package.json_, ajouter une ligne dans scripts `"build": "webpack"` :

```json
{
  "name": "arolla",
  "version": "1.0.0",
  "description": "exemple de projet react-redux",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack", 
  },
  "author": "mathilde",
  "license": "ISC",
  "dependencies": {
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.2.2",
    "babel-preset": "^1.1.7",
    "babel-preset-react": "^6.24.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript-preset": "^1.0.0",
    "webpack": "^5.28.0",
    "webpack-cli": "^4.6.0"
  }
}
```

ℹ La commande sera lancée pour build le projet

## <a name="step1d"> </a>🔧 Configuration pour faire démarrer l'application

### 🎾 Configurer  webpack-dev-server

10. Définir un port : Ajouter une ligne dans le _webpack.config.js_ entre output et resolve

```js 
   devServer: {
      port: 5500,
   },
```

11. Ajouter une ligne dans le _package.json_

```json 
"scripts" {
  "serve": "webpack serve --mode=development"

  }
``` 

ℹ La commande sera exécutée pour lancer le projet

###  🚪 Créer un composant racine basique

12. Créer un répertoire _src_
13. Dedans, ajouter un fichier _App.tsx_ et entrer :

```tsx
import React from 'react';

const App : React.FC = () => (
<div>Hello !</div>
);

export default App;
```
ℹ Ce sera notre composant principal racine de tous les autres

ℹ L'extension .tsx accepte le html et le typescript

14. et un fichier _index.tsx_  et entrer :

  ```tsx
  import React from 'react';
  import ReactDom from 'react-dom';
  import App from './App';

const container = document.getElementById('projet');
ReactDom.render(<App/>,  container);
```  

ℹ Ce sera le fichier principal du projet comme l'indique la ligne ` "main": "index.js" ` du _package.json_
et `entry: './src/index.tsx',` _dans webpack.config.js_.

ℹ Le container ici est la balise ajoutée dans _index.html_.

## <a name="step1e"> </a>🔑 Démarrer l'application

15. Builder le projet ` npm run build`
16. Lancer le serveur ` npm run serve`
17. Dans un navigateur, aller à la page http://localhost:5500 et voyez "Hello !"

## <a name="step1f"> </a> ⚙️ Réglages de problèmes mineurs d'imports incorrects (facultatif)

18. Lancer la commande `tsc --init` à la racine du projet (Penser à mettre à jour les variables d'environnement)

    👉 cela créera un fichier _tsconfig.json_ (ou bien créez-le)
    
19. Mettre la ligne à true :
    `"esModuleInterop": true,  `

# <a name="step2"> </a>🧩 Etape 2 : Créer un composant

Nous allons créer une liste (de choses à faire, de challenges, d'ingrédients de cuisine...selon votre humeur), soit 2
composants :

* un formulaire pour ajouter un élément à la liste
* un composant pour afficher la liste

1. Créer un répertoire _todolist_
2. Dedans, créer un fichier _ItemCreationComponent.tsx_ : le formulaire d'ajout
3. Dedans, créer un fichier _ListDisplayComponent.tsx_ : la liste affichée

Voici les deux manières de faire, en faire un composant de chaque style :

##  <a name="step2a"> </a> En tant que fonction

4. Créer une nouvelle fonction dans le fichier _ItemCreationComponent.tsx_ :

  ```
    const ItemCreationComponent = () => { };
 ```

5. ...qui retourne le html du formulaire :

  ```
    import React from 'react';
    
    const ItemCreationComponent: React.FC = ()  => {

        return  (<form id="todolist">
                    <label htmlFor="item">Je dois faire : </label>
                    <input type="text" name="item"></input>
                    <button type="submit"> ok </button>
                </form>);
        };
    }

 ```

6. ...et l'exporter :

  ```  
    export default ItemCreationComponent;
  ```

7. ...puis l'importer dans le composant principal _App.tsx_ (créé à l'étape 1) :

  ```  
  import React from 'react';
  import ItemCreationComponent from './todolist/ItemCreationComponent';
  
    const App : React.FC = () => (
       <ItemCreationComponent/>
    );
  ```

8. Lancer l'application [comment faire ?](#start-app)

## En tant que classe  <a name="step2b"> </a>

9. Créer une nouvelle classe dans le fichier _ListDisplayComponent.tsx_ :

  ```
    class ListDisplayComponent  {
       ....
    }  
 ```

10. ...qui étend l'interface React.Component et implémente la fonction render()  :

  ```
    import React from 'react';
    
    class ListDisplayComponent extends React.Component {
        render() {
            return <div id="listOfItems"> 
                        emplacement pour ma future liste
                   </div>;
        };
    }

 ```

11. ...et l'exporter :

  ```  
    export default ListDisplayComponent;
  ```

12. ...puis l'importer dans le composant principal _App.tsx_ (créé à l'étape 1) :

  ```  
  import React from 'react';
  import ItemCreationComponent from './todolist/ItemCreationComponent';
  import ListDisplayComponent from './todolist/ListDisplayComponent';
  
    const App : React.FC = () => (
         <div>
            <ItemCreationComponent/>
            <ListDisplayComponent/>
         </div>
    );
  ```

13. Lancer l'application  [comment faire ?](#start-app)
    👉 Vous devez voir apparaître vos deux composants.

## Pour terminer
Les deux composants que vous avez créés ne sont pas fonctionnels. 
Nous allons voir dans la prochaine étape comment ajouter du comportement aux composants 
et les faire communiquer entre eux.




    

   


