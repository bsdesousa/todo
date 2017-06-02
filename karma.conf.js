// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul', 'junit']
              : ['progress', 'kjhtml', 'junit'],
    junitReporter: {
      outputDir: './tests/Teste.xml', // results will be saved as $outputDir/$browserName.xml 
      //outputFile: 'Teste.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile 
//      suite: '', // suite will become the package name attribute in xml testsuite element 
      useBrowserName: true, // add browser name to report and classes names 
//      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element 
//      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element 
//      properties: {} // key value pair of properties to add to the <properties> section of the report 
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome_without_sandbox'],
    customLaunchers: {
      Chrome_without_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox'] // with sandbox it fails under Docker
      }
    },
    singleRun: true
  });
};
