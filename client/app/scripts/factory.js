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

      getMessages: function(roomId){
        var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/" + roomId + '/messages/');
        return $firebaseArray(fireRef);
      },

      sendMessage: function(roomId, newMessage){
        var messages = this.getMessages(roomId);
        // console.log(rooms);
        messages.$add(newMessage);
        // rooms[roomId].$save({messages: newMessage});
      }

    }


}]);