# Sommaire

- [Limitations](#limitation)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)

Le but de cette librairie est de générer des strings de la forme `<nom> <déterminant_défini> <animal> <adjectif>`, un peu comme les psoudonymes qui sont générés lorsque vous rejoignez anonymement un google doc.

Exemples:

```txt
Alan le semnopithèque charismatique
Mickaël le tétras diplomate
Sabine la grenouille dynamique
Jonathan le binturong discipliné
Charlène la mouette respectueuse
```

# Limitation

Au moment de l'écriture de cette documentation, la librairie génére son premier doublon aux alentours de 3000 générations **_en moyenne_**. Aucun mechanisme n'est mis en place pour garantir une certaine unicitée. Le premier doublon pourrait très bien arriver des la 2ième génération.

L'existence de cette librairie découle d'un projet de génération de mots de passes temporaires à usage unique à destination d'un public estimé de 2000 personnes. Dans ce cas un espace de collision aussi petit n'est pas un problème, mais il pourrait l'être pour vous.

# Installation

```sh
npm install --save @zhakk-harn/identifiants_uniques
```

# Utilisation

## ESM

```js
import idUnique from "@zhakk_harn/identifiants_uniques";

console.log(idUnique());
```

## CJS

```js
const idUnique = require("@zhakk_harn/identifiants_uniques");

console.log(idUnique());
```

# Contribuer

Si vous souhaitez ajouter des prénoms, animaux, ou adjectifs, vous êtes les bienvenus mais il existe quelques règles qui ont été suivies lors du developpement et que je vous demande de suivre.

Toutes ces règles sont pensées en prennant en compte que les résultats générés par cette librairie devraient être utilisables dans une présentation live. Si ces règles vos posent problème, sachez que c'est la raison pour laquelle ce projet est open source et que sa distribution via npm est scopée, vous êtes libres de forker et de vous approprier une copie de ce projet afin de finir sur une version qui vous correspond.

1. Les listes sont classés par ordre alphabetique. Pour les liste d'animaux et d'adjectifs ils sont ordonnés en se basant sur la forme masculine.
2. Ne seront pas acceptés les animaux ayant une possible connotation insultante ou vulgaire (e.g. "chien", "chienne", "chatte"). Cependant, si il faut ajouter un adjectif pour rendre l'animal péjoratif alors il est acceptable. Il n'y a pas de problème en soi avec le terme "vache", "âne", ou "poisson" jusqu'à ce qu'on parle spécifiquement de mémoire, d'intelligence ou de volume.
3. Seulement les adjectifs neutres et positifs sont acceptés.
4. Pour le moment les insectes sont acceptés de manière très limitée pour éviter qu'ils dominent la génération de cette librairie du fait de leur vaste quantité d'espèces différentes.
5. Le nom des animaux doit se limiter à un mot, possiblement deux si un tiret d'union est justifiable. Dans le cas des oiseaux, retirez la partie adjective ("grand" dans "grand cormoran" par exemple), sinon dans le doute, gardez le premier mot et rentrez le dans un moteur de recherche, si les premiers résultats sont à propos de l'oiseau c'est bon.

## Idée de contributions faciles

Des pistes d'ajouts faciles serait, les adjecifs de couleurs (au moment de la V1 seulement "rose" fait partie des adjectifs) et les métiers en tant qu'adjectifs (seulement "artiste", "auteur" et "peintre" font partie des adjectifs)
