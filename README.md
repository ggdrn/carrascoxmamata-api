# CARRASCO X MAMATA API
#### firebase function api with Express, Webpack, Babel, Eslint, Dotenv and Swagger

## PREREQUISITES
- Node version `v10.18.1` (you can use `nvm` to manage your node version, know more in https://github.com/nvm-sh/nvm)
- Firebase Tools https://www.npmjs.com/package/firebase-tools
- A firebase project initialized with function folder

## SETUP
- Clear your `functions` folder

- Inside `functions` folder run `git clone https://github.com/diegofer25/firebase-function-api.git .` to clone http or `git clone git@github.com:diegofer25/firebase-function-api.git .` to clone with SSH.

- Run `npm i` to install the dependencies

- Run `git remote remove origin` to remove this remote repository

- Change the field `functionsUrl` in the `package.json` with your api url

## Scripts
- `npm run dev` for development

- `npm run build` for production

## Features

- You can check the api documentation on `/api/docs` path
