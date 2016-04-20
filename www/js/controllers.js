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
  $scope.categoryid;

}])
.controller('CategoryCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) {
  
    $scope.challenges = [
    {"category1":[
    {"name":"Shoot 3 darts", "description":"by The Irish Times Pub", "rewardDescription":"1 Free drink", "reward":"Score 100 points"},
    {"name":"Drink with a complete stranger", "description":"by de Muze", "rewardDescription":"50% off", "reward":""},
    {"name":"Shoot 3 darts", "description":"by The Irish Times Pub", "rewardDescription":"1 Free drink", "reward":"Score 100 points"}
]}
    ] 
}])

.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

