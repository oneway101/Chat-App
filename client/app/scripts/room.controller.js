var chatApp = angular.module('chatApp');

chatApp.controller('room.controller',function($scope,$firebaseArray,Room, $modal) {
	Room.roomList().then(function(rooms){
		$scope.rooms = rooms;
	})

	$scope.openModal = function(){
		$modal.open({
   		templateUrl: 'components/modal/modal.html',
   		controller: 'modal.controller'
		});
	};

});