

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

Troubleshooting issues, according to Chuck Adams:
   * To get this working nowadays, change the dependency names. The yarn CLI should read:

      yarn add --dev @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin webpack webpack-cli webpack-dev-server rimraf

   * And the .babelrc should look like so:
    
      {
         "presets": [
         "@babel/env",
         "@babel/react"
        ]
      }
      
   * (And yes, it’s shameful what a minefield the JS dependency ecosystem still is to this day)

If successfull, you should get something like this:
-------------------------------------------------------------------------------------------------------------
npm add --dev @babel/core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin webpack webpack-cli webpack-dev-server rimraf
npm WARN install Usage of the `--dev` option is deprecated. Use `--only=dev` instead.
-------------------------------------------------------------------------------------------------------------

> core-js-pure@3.1.4 postinstall C:\PROJECTS\Michaels_Projects\orlando-tic-tac-toe\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> webpack-cli@3.3.4 postinstall C:\PROJECTS\Michaels_Projects\orlando-tic-tac-toe\node_modules\webpack-cli
> node ./bin/opencollective.js



                            Thanks for using webpack!
                 Please consider donating to our Open Collective
                        to help us maintain this package.



                 Donate: https://opencollective.com/webpack/donate


npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @babel/preset-react@7.0.0
+ @babel/core@7.4.5
+ rimraf@2.6.3
+ html-webpack-plugin@3.2.0
+ webpack-cli@3.3.4
+ babel-loader@8.0.6
+ webpack-dev-server@3.7.2
+ @babel/preset-env@7.4.5
+ webpack@4.34.0
added 117 packages from 23 contributors, updated 6 packages and audited 12265 packages in 33.793s
found 0 vulnerabilities