var chatApp = angular.module('chatApp');

chatApp.controller('rooms.controller',function($scope,$firebaseArray,Room, $modal, $cookies) {
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
		$scope.selectedRoom = true;
      	$scope.messages = Room.getMessages($scope.currentRoom)

	};
});

chatApp.controller('chatRoom.controller',function($stateParams, $scope, $firebaseArray,Room, $modal, $cookies) {
	$scope.sendMessage = function(message){
		
		var newMessage = {
          userName: $cookies.blocChatCurrentUser,
          content: message,
          createdOn: new Date().getTime()
        }
        
		Room.sendMessage($stateParams.id, newMessage);
		console.log(newMessage);
		$scope.message = '';
	};

	$scope.messages = Room.getMessages($stateParams.id);
	$scope.room = Room.getRoom($stateParams.id);
});
