var chatApp = angular.module('chatApp');

chatApp.controller('room.controller',function($scope,$firebaseArray,Room, $modal, $cookies) {
	Room.roomList().then(function(rooms){
		$scope.rooms = rooms;
	});

	$scope.openModal = function(){
		$modal.open({
   		templateUrl: '/app/templates/createRoom.modal.html',
   		controller: 'createRoom.controller'
		});
	};

	/*var newMessage = {
          userName: $cookies.blocChatCurrentUser,
          content: $scope.newMessage.content,
          createdAt: new Date()
        }*/
});
