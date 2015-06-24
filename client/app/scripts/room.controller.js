var chatApp = angular.module('chatApp');

chatApp.controller('room.controller',function($scope,$firebaseArray,Room) {
	var allrooms = [
		{ roomId: 'Room1'},{ roomId: 'Room2'},{ roomId: 'Room3'}
	];
	$scope.rooms = allrooms;
	
	$scope.createRoom = function(room){
		Room.createRoom(room);

	};



});