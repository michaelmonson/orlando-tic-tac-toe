The views folder will hold all of our react components (the JSX files). The index.html file is the template we are using in webpack to inject the app bundle and run the app. Finally, the index.js file is the entry point into our react app.

Later on, when we add redux, we will create more folders to hold the reducers, actions and store.

Webpack and babel configurations
   * Webpack is used to bundle our app and vendor scripts
   * Also injects them into our template index.html file
   * Allows it to be served through the Webpack Dev Server to test that functionality is working correctly.

Added a webpack.config.js file to the root of the project.

Using BABEL to transpile our ES6; added a .babelrc file to the root of the project and set it with correct presets.

Yarn/npm scripts
   * By default, when running a 'cli' program in this kind of project, it would be necessary to enter
     the FULL path to the program.  For example:

        (macOS) ./node_modules/.bin/<cli_program> [command] --args

   * We can shortcut this by adding yarn/npm scripts. 
   * Add three scripts, clean, build and start to the package.json file.
   * The BUILD script should bundle and output a dist/ folder with all of the required code to run our App.

Building the project and React Web Application:
   * From the terminal, run the below script to verify that the output doesn’t contain errors (red output).

          "yarn build"  <or>   "npm build"

   * If the configurations are correct, a dist/ folder will apear at the root of our project.
