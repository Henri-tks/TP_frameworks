

# TP Final – Gestionnaire de tâches React

## Prérequis

- Node.js >= 18.x recommandé
- npm >= 9.x

## Installation détaillée

1. **Cloner le dépôt**
	```bash
	git clone <url-du-repo>
	cd tp_final
	```

2. **Installer les dépendances**
	```bash
	npm install
	```

3. **Lancer le serveur de développement**
	```bash
	npm run dev
	```
	- Accès à l’application sur [http://localhost:5173](http://localhost:5173) (ou port affiché dans le terminal)

4. **Compiler pour la production**
	```bash
	npm run build
	```
	- Le build final est généré dans le dossier `dist/`

5. **Prévisualiser le build**
	```bash
	npm run preview
	```
	- Permet de tester le build localement avant déploiement

6. **Vérifier la qualité du code (lint)**
	```bash
	npm run lint
	```
	- Analyse statique du code avec ESLint

## Scripts npm disponibles

| Script         | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Démarre le serveur de développement (Vite)       |
| `npm run build`| Build de production optimisé                     |
| `npm run preview` | Prévisualise le build localement              |
| `npm run lint` | Analyse statique du code (ESLint)                |

## Fonctionnalités principales

- Ajout, suppression, édition, statut (à faire/fait) des tâches
- Filtrage dynamique (toutes, à faire, faites)
- Persistance locale (localStorage, aucune API serveur requise)
- Interface moderne, responsive et accessible (labels, navigation clavier)
- Performance fluide même avec 200+ tâches (optimisation React.memo, tri/filtre efficaces)
- Structure modulaire (composants, context, hooks)

## Structure du projet

```
tp_final/
│
├── components/      # Composants React (TaskForm, TaskList, TaskItem, TaskFilter...)
├── context/         # Contexte global (TasksContext)
├── utils/           # Fonctions utilitaires (localStorage)
├── src/             # Point d’entrée, styles globaux
├── types.ts         # Types TypeScript partagés
├── package.json     # Dépendances et scripts npm
├── vite.config.ts   # Configuration Vite
└── ...
```

## Fonctionnement

- **Ajout d’une tâche** : formulaire contrôlé, validation du titre, description et date optionnelles
- **Statut** : case à cocher pour marquer comme « à faire » ou « fait »
- **Filtrage** : boutons pour afficher toutes les tâches, seulement celles à faire ou faites
- **Persistance** : toute modification est sauvegardée dans le localStorage automatiquement
- **Accessibilité** : labels associés aux inputs, navigation clavier, couleurs contrastées

## Auteur

Henri-tks
