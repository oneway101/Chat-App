angular.module('chatApp')
  .factory('Room',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/");
    var rooms = $firebaseArray(fireRef);

    return{
      roomList: function(){
          return rooms.$loaded();
      },

      createRoom:function(newRoomName){
        var newRoom = {
          name: newRoomName,
          messages: []
        };
        rooms.$add(newRoom);
        rooms.$save(newRoom);
      },

      sendMessage: function(roomId, newMessage){
        rooms.roomId.$add({messages: newMessage});
        rooms.roomId.$save({messages: newMessage});
      },

      getMessages: function(roomId){

      }

    }


}]);

