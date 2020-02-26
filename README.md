# Redmine Time Tracker

https://lyrklif.github.io/redmine_time_tracker/  

Написан на React.js, PWA настроен  

**Внимание!** Если ваш redmine url начинается с ***http://***, а не ***https://***, то для использования трекера на gh-pages нужно разрешить небезопасный контент в браузере. В противном случае запросы к http://... будут **блокироваться** *(gh-pages на https)*.   
 *[на локальном с этим проблем нет, можно клонировать репозиторий и запускать]*  
 
 Для запуска проекта:  
 ```  
 npm i  
 npm start  
```
 <br>
 Как разрешить небезопасный контент в браузере:  
 
 Шаг 1  
 ![Шаг 1](https://i.paste.pics/b44dd02ae25ad2f7b890ca78eddf8680.png)  
 
 Шаг 2  
 ![Шаг 1](https://i.paste.pics/aa76c27d2989729cad2872e752a00595.png)  
 
 #### Использованные плагины, помимо стандартных в шаблоне Create React App  
 Название | Описание
 ------------ | -------------
 **@material-ui** | готовые стилизованные компоненты 
 **axios** | для выполнения HTTP и HTTPS-запросов 
 **gh-pages** | для быстрой публикации файлов в ветке gh-pages 

 #### Новые команды
   Название | Описание
  ------------ | -------------
  **predeploy** | подготовить файлы к публикации 
  **deploy** | выложить файлы из папки build на gh-pages 
 
 <br> 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
