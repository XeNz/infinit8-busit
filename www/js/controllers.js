angular.module('starter.controllers', ['starter.services', 'ionic','ngCordova'])

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

.controller('UnderconstructionCtrl', ['$scope', '$stateParams', function ($scope,$stateParams) { 
}])



.controller('ChallengeDetailCtrl', function($scope, $stateParams, Challenges) {
  $scope.challenge = Challenges.get($stateParams.challengeId);
})

.controller('ChallengeMapCtrl', function($scope, $stateParams, Challenges) {
    challenges =[{
    "id":0,"name":"SHOOT 3 DARTS", "description":"by The Irish Times Pub",
    "rewardDescription":"1 Free drink", "instructions":"1) Go to the Irish Time pub. 2) Talk to the barkeeper. 3) Shoot 3 Darts. 4) Score over 100. 5) Scan the QR code. 6)Enjoy your free drink.",
    "image": "img/darts.png","lat":51.221241,"long":4.400419}];
    //console.log(challenges[0].long);
  $scope.challenge = challenges[0];

  })

.controller('ChallengeWonCtrl', function($scope, $stateParams, Challenges, $cordovaBarcodeScanner) {
  $scope.challenge = Challenges.get($stateParams.challengeId);

    document.addEventListener("deviceready", function () {
      console.log('deviceread');
    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        console.log("yes like this");
      }, function(error) {
        console.log("not like this");
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

  }, false);
})


.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile, Challenges,$stateParams) {
      function initialize() {
        $scope.challenge = Challenges.get($stateParams.challengeId);

        //var myLatlng = new google.maps.LatLng($scope.challenge.lat,$scope.challenge.long);
        var myLatlng = new google.maps.LatLng(51.221241,4.400419);

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
          title: 'The Irish Times Pub'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }


      google.maps.event.addDomListener(window, 'load', initialize);
      ionic.Platform.ready(initialize);
      $( document ).ready(function() {
          console.log("kappa");
          setTimeout(initialize(),2000);

      });
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
