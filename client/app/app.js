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

    $stateProvider.state('chatroom', {
        url: '/chatroom/:id',
        templateUrl: 'app/templates/chat.html',
        controller: 'chat.controller'
      });
  })
  
  .run(['$cookies', '$modal', function($cookies, $modal, Room){

    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '' ) {
        // Do something to allow users to set their username
        var modalInstance = $modal.open({
          templateUrl: '/app/templates/username.modal.html',
          controller: 'username.controller',
          size: 'sm'
        });

        modalInstance.result.then(function(newCurrentUser) {
        $cookies.blocChatCurrentUser = newCurrentUser;
        console.log($cookies.blocChatCurrentUser);
        //Room.setUser(newCurrentUser);

       });
    }

  }]);

