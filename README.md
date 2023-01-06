# before git clone...

## init create-react-app local

- uninstall old version ( global )

```
npm uninstall create-react-app -g
```

- download latest create-react-app if not exist, it will named react-project and use typescript as template and dependent by npm

```
npx create-react-app react-project --template typescript --use-npm
```

_if not response, try these command below to change mirror source_

```
npm config set registry https://registry.npmjs.org/
```

_show current mirror source_

```
npm config get registry
```

_if still stuck in some command_

```
npm cache clean --force
```

- initial npm

```
npm init
```

- download via npm but not npx

```
npm install create-react-app
```

- install by npx and typescript npm

```
npx create-react-app react-project --template typescript --use-npm
```

- change git remote origin

```
git remote add origin git@github.com:Aakarshan20/react_frontend_project.git
```

- run git pull not git clone

```
git pull
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# ant designed

```
npm install antd --save
```

# install react-router-dom

```
npm install react-router-dom --save
```

# install axiox to send ajax request

```
npm install axios --save
```
