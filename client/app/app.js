'use strict';

angular.module('chatApp', [
  'ngCookies',
  'ngResource',
  'firebase',
  'ui.router',
  'ui.bootstrap',
  'ngCookies'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider.state('home', {
        url: '/',
      });
    $stateProvider.state('chatroom', {
        url: '/chatroom/:id',
        templateUrl: 'app/templates/chatRoom.html',
        controller: 'chatRoom.controller'
      });
  })
  
  .run(['$cookies', '$modal', function($cookies, $modal, Room){

    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
        // Do something to allow users to set their username
        var modalInstance = $modal.open({
          templateUrl: '/app/templates/username.modal.html',
          controller: 'username.controller',
          size: 'lg'
        });

        modalInstance.result.then(function(newCurrentUser) {
        $cookies.blocChatCurrentUser = newCurrentUser;
        console.log($cookies.blocChatCurrentUser);

       });
    }

  }]);

