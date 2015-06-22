'use strict';

angular.module('chatApp', [
  'ngCookies',
  'ngResource',
  'firebase',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider.state('chat', {
        url: '/',
        templateUrl: 'app/templates/chat.html',
        controller: 'chat.controller'
      });
  });

angular.module('chatApp')
  .factory('Room',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/");
    var rooms = $firebaseArray(fireRef);

    return{
      all:rooms
    }

}]);