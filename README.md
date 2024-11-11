# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# React Module Test | Notes App

Figma Link: [https://www.figma.com/design/JphKHxiTneQdgsUeOp2elm/Assignment-(Copy)?node-id=0-1&t=TPWwVSkxwhIwsHPD-1](https://www.figma.com/design/JphKHxiTneQdgsUeOp2elm/Assignment-(Copy)?node-id=0-1&t=TPWwVSkxwhIwsHPD-1)

### Problem Statement:

Your challenge is to build out a minimal note taking app.

### Features List:

1. User should be able to create group for notes, a popup open up to create a new group and if the user clicks outside the popup then you need to close the popup
2. User should be able to add notes in a particular group
3. User should be able save the note by pressing Enter key or clicking on the Enter icon in the text input
4. You need to save the notes in localstorage, every notes and group should persist on page reload
5. As soon as the user changes the group, you need to fetch all the notes related to that particular group
6. You also need to save meta data like date and time when the notes was saved and last updated.

======================================================================================================

### How to run the project: 

  pull the project into your local machine and run below commands  
  cd minimal_notes_taking_app
  npm install
  npm run dev