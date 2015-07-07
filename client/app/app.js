'use strict';

angular.module('chatApp', [
  'ngCookies',
  'ngResource',
  'firebase',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider.state('room', {
        url: '/room',
        templateUrl: 'app/templates/chat.html',
        controller: 'chat.controller'
      });
  });

angular.module('chatApp')
  .factory('Room',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/");
    var rooms = $firebaseArray(fireRef);

    return{
      roomList: function(){
          return rooms.$loaded();
      },

      createRoom:function(room){
        rooms.$add({
          name: room.name
        })
        rooms.$save(room);
      }
    }

}]);