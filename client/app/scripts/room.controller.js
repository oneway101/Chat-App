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

	$scope.setCurrentRoom = function(room){
		$scope.currentRoom = room;
      	$scope.messages = Room.getMessages($scope.currentRoom)

	};

});

chatApp.controller('chat.controller',function($stateParams, $scope,$firebaseArray,Room, $modal, $cookies) {
	$scope.sendMessage = function(message){
		
		var newMessage = {
          userName: $cookies.blocChatCurrentUser,
          content: message,
          createdAt: new Date()
        }
		Room.sendMessage($stateParams.id, newMessage);
	};

	$scope.messages = Room.getMessages($stateParams.id);

});