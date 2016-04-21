// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // 1
    .state('tab.appstart', {
    url: '/appstart',
    views: {
      'tab-appstart': {
        templateUrl: 'templates/tab-appstart.html',
        controller: 'AppstartCtrl'
      }
    }
  })

    // 2
    .state('tab.registration', {
    url: '/registration',
    views: {
      'tab-registration': {
        templateUrl: 'templates/tab-registration.html',
        controller: 'RegistrationCtrl'
      }
    }
  })

    //3
      .state('tab.challengetypes', {
      url: '/challengetypes',
      views: {
        'tab-challengetypes': {
          templateUrl: 'templates/tab-challengetypes.html',
          controller: 'ChallengetypesCtrl'
        }
      }
    })
      .state('tab.challenges', {
      url: '/challenges',
      views: {
        'tab-challenges': {
          templateUrl: 'templates/tab-challenges.html',
          controller: 'ChallengeCtrl'
        }
      }
    })
    .state('tab.challenge-detail', {
      url: '/challenges/:challengeId',
      views: {
        'tab-challenges': {
          templateUrl: 'templates/challenge-detail.html',
          controller: 'ChallengeDetailCtrl'
        }
      }
    })
     .state('tab.challenge-map', {
      url: '/challenges/:challengeId/map',
      views: {
        'tab-challenges': {
          templateUrl: 'templates/challenge-map.html',
          controller: 'ChallengeMapCtrl'
        }
      }
    })
      .state('tab.underconstruction', {
      url: '/underconstruction',
      views: {
        'tab-underconstruction': {
          templateUrl: 'templates/tab-underconstruction.html',
          controller: 'UnderconstructionCtrl'
        }
      }
    })


  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/appstart');

});
