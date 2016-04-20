angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})
.controller('AppstartCtrl', function($scope) {

    $scope.$on('$ionicView.loaded', function() {
      ionic.Platform.ready( function() {
        if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
      });
    });
  
})
.controller('RegistrationCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) { 
}])
.controller('ChallengesCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) { 
}])
.controller('CategoryCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) { 
}])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

