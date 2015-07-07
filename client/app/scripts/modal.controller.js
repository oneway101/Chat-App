angular.module('chatApp').controller('modal.controller', function ($scope,Room, $modalInstance) {

  $scope.ok = function(room) {
    Room.createRoom(room);
    $modalInstance.close();
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };



});