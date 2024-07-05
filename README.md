# DnD-Character-Manager

This project is a Single Page Application (SPA) built with React. I created a Dnd character manager where you can create your dnd characters all in one place for each of the campaigns that you are in.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Overview](#overview)

## Installation

To get started with setting up the project, run this command: 

```sh
npm install 
```
You will also need to install a JSON server on your local machine by running this command:

```sh
npm install -g json-server
```

## Setup

There should be an empty database file ready to go. You just have to link it to the JSON server by running:

```sh
json-server --watch db.json
```

After starting the database server, go ahead a run this command to start the app:

```sh
npm start
```

This should auomatically open the app on your most recent used browser or your default browser. You may need to specify for it to run on a different port than the json server is running on.

## Overview

On page load, the DnD Character manager will load you into a home page with no created characters. To get started using my app, create your own dnd character and explore!

### Features include:

- Creating a DnD character
- View your created DnD Characters
- Editing a DnD Character
- Viewing a vast list of spells by class from DnD 5e
- Drill down into Spells to get their various details needed to use a spell.
