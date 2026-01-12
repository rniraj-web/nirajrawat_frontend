# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Installation

1. Create a Vite React Project using the below command.

# Command "npm create vite@latest ./" --- since I already created the folder so I installed vite package on same folder

2. npm install
3. Installed bootstrap bootstrap icons and react-icons - that supports the logo for the bootstrap and easy customising.

# Commnad "npm i bootstrap bootstrap-icons react-icons".

4. Also we should import some dependencies for bootstrap, it can we done by adding in main.jsx so import will work perfectly in all the children folders or files. I got all the dependencies through Bootstrap documentation but for now kindly refer main.jsx if you want to refer, below is the links of Bootstrap.

# Link "https://getbootstrap.com/docs/5.3/getting-started/download/"

5. cd nirajrawat_frontend or "folder name"
6. # "Run command" npm run dev

# My folder structure

# public/assets - all my images are inside this folder

# src/

where all my files, which helps for the routing in Next.js in future also when we are working with multiple files, I hold this habit more recently while working at AIAware.

# components/

# TopBar.jsx

# NavBar.jsx

# RegisterMain.jsx

# SignUp.jsx

# CheckList.jsx

# styles/

# globals.css - css styling file and imported in main.jsx because it will will reflect in all folders if added in main.jsx

# App.jsx - all the compoents are imported in this folder

# main.jsx - root file where html is rendered

## added the globals.css file to the main.jsx so that styles are added to the sub components and can we reused throughout.

updated the App.jsx with the structure of the page with all the components

## Why React and component based.

Going further we can use React and Next.js for routing in that case component based will be usable and good for maintaining and understanding code strucutre or layout.

## Components are helpful, channging in one of the components or the div will not affect the layout, also it is easy when it want to locate or make any changes. for eg CheckList.jsx has all the checklist and adding, deleting for updating makes it simpler

## Why Bootstrap

Bootstrap provides the a mobile-first grid system, which helps to build the responsive layout such as container, row, col
It provides the ready components and utility classes (such as navbar, bottons and so on ) for quick development
