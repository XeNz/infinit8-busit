angular.module('starter.controllers', ['starter.services', 'ionic'])

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
.controller('ChallengetypesCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) { 
}])

.controller('ChallengeCtrl', function($scope, Challenges) {
  $scope.challenges = Challenges.all();
  $scope.remove = function(challenge) {
    Challenges.remove(challenge);
  };
})




.controller('ChallengeDetailCtrl', function($scope, $stateParams, Challenges) {
  $scope.challenge = Challenges.get($stateParams.challengeId);
})




.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      //google.maps.event.addDomListener(window, 'load', initialize);
      ionic.Platform.ready(initialize);
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });
