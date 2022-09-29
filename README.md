# TodoApp
TodoApp using Firebase (8 not 9), busboy (not necessary anymore?)

seguindo [tutorial](https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/)

# `functions/util/config.js`
    module.exports = {
      apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",`
      authDomain: "xxxxxxxxxxxxxxxxxxxxx",
      databaseURL: "........",
      projectId: "xxxxxxxxxxxxxxxxxxxxxxxx",
      storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxx",
      appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      measurementId: ".......",
    };

# material-ui/core é versão antiga, não instala com react18
 - usar React v16.13.1 como o tutorial diz ou
 - npm install @material-ui/core --legacy-peer-deps
