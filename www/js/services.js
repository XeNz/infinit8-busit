angular.module('starter.services', [])

.factory('Challenges', function() {

   challenges =[{
    "id":0,"name":"SHOOT 3 DARTS", "description":"by The Irish Times Pub", "rewardDescription":"1 Free drink", "instructions":"1) Go to the Irish Time pub. 2) Talk to the barkeeper. 3) Shoot 3 Darts. 4) Score over 100. 5) Scan the QR code. 6)Enjoy your free drink.","image": "img/darts.png"},
    {"id":1,"name":"DRINK WITH A COMPLETE STRANGER", "description":"by de Muze", "rewardDescription":"50% off", "instructions":"","image": "img/stranger.png"},
    {"id":2,"name":"SING A SONG IN A KARAOKE BAR","description":"by Bonaparte", "rewardDescription":"1 Free Kriek", "instructions":"","image": "img/sing.png"}
    ];

  return {
    all: function() {
      return challenges;
    },
    remove: function(challenge) {
      challenges.splice(challenges.indexOf(challenge), 1);
    },
    get: function(challengeId) {
      for (var i = 0; i < challenges.length; i++) {
        if (challenges[i].id === parseInt(challengeId)) {
          return challenges[i];
        }
      }
      return null;
    }
  };
});
