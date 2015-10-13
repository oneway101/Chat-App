angular.module('chatApp')
  .factory('Room',['$firebaseArray', '$firebaseObject', '$rootScope', function($firebaseArray, $firebaseObject,$rootScope){

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
      deleteRoom: function(room){
        rooms.$remove(room);
      },

      getMessages: function(roomId){
        var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/" + roomId + '/messages/');
        return $firebaseArray(fireRef);
      },

      getRoom: function(roomId){
        var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/" + roomId);
        return $firebaseObject(fireRef);
      },

      sendMessage: function(roomId, newMessage){
        var messages = this.getMessages(roomId);
        messages.$add(newMessage);
      },

      hideMenu: function(){
        return true;
      }

    }


}]);