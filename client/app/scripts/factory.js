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

      /*setUser:function(newCurrentUser){
        rooms.$add({
          username: newCurrentUser
        });
        rooms.$save(newCurrentUser);
      },*/

      sendMessage: function(room, message){
        room.messages.$add(message);
        room.messages.$save(message);
      },

      getMessages: function(roomId){

      }

    }


}]);

angular.module('chatApp')
.factory('Message', ['$firebase', function($firebase) {

  var firebaseRef = new Firebase("https://real-time-chat-angular.firebaseio.com/");
  var messages = $firebase(firebaseRef.child('messages')).$asArray();;

  return {
    send: function(newMessage) {
      // Send method logic
    }
  }
}])
