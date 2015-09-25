var chatAppModal = angular.module('chatApp');

chatAppModal.controller('createRoom.controller', function ($scope, Room, $modalInstance) {

  $scope.createRoom = function(newRoomName){
    Room.createRoom(newRoomName);
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

});


chatAppModal.controller('username.controller', function ($scope, Room, $modalInstance, $cookies) {

  $scope.setUsername = function(newCurrentUser) {

    /*modalInstance.result.then(function(newCurrentUser) {
      $cookies.blocChatCurrentUser == newCurrentUser;
        console.log($cookies.blocChatCurrentUser);
      });
    */
    $modalInstance.close(newCurrentUser);

  }

});