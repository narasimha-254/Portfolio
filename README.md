# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




To Create my portfolio I have used some dependencys

figma design:  https://www.figma.com/design/tkDs3aeBaqvF47hD063LSH/Untitled?node-id=1-2&t=OAGgGCvZLIPKXE4C-0

Note: Move images to public/assets/ if not already there.

for fonts:   npm install @fontsource/roboto @fontsource/outfit
host address:  http://localhost:5173/

in main.js i have imported fonts 
import '@fontsource/outfit'
import '@fontsource/roboto'

I have configured css style for fonts to camelcase with in the vite.config.js file
css:{
    modules:{
      localsConvention:'camelCase'
    }
  }

  then i have changed app.css file name as app.module.css

  i created a file for storing variables in css. the file named as vars.css
  motive to create this file i stores some variables in the css style modules. for use anywhere

  i have been created another file named is utils.js 


