// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('angular-cli/plugins/karma')
    ],
    files: [
            //Paths loaded by Karma
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},

 	    // paths loaded via module imports
            {pattern: 'dist/**/*', included: false, watched: true},
   
	    { pattern: './src/test.ts', watched: false },
            { pattern: 'karma-test-shim.js', included: true, watched: true},

           // Distribution folder
            { pattern: 'src/**/*.ts', included: false, watched: false },
            { pattern: 'dist/**/*.js.map', included: false, watched: false } 
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli'],
       'src/app/**/!(*.spec).js': ['coverage'] 
    },
    reporters: ['progress',  'coverage'],
  
    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
   coverageReporter: {
      reporters: [
        { type: 'json', subdir: '.', file: 'coverage-final.json' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
