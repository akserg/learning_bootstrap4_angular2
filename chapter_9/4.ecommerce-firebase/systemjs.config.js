(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler':'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router':'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',

      'firebase': 'npm:firebase',
      'promise-polyfill':'npm:promise-polyfill',
                                       
      'angularfire2': 'npm:angularfire2/bundles/core.umd.js',
      'angularfire2/database': 'npm:angularfire2/bundles/database.umd.js',
      'angularfire2/auth': 'npm:angularfire2/bundles/auth.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'firebase': { 
        main: 'firebase-browser.js',
        defaultExtension: 'js'
      },
      'promise-polyfill': {
        main: 'promise.js',
        defaultExtension: 'js'
      }
    },
    meta: {
      firebase : {
        format: 'global',
        exports: 'firebase'
      }
    }
  });
})(this);