angular.module('chatApp')
  .factory('Room',['$firebaseArray','$rootScope', function($firebaseArray,$rootScope){

    var fireRef = new Firebase ("https://real-time-chat-angular.firebaseio.com/");
    var rooms = $firebaseArray(fireRef);

    return{
      roomList: function(){
          return rooms.$loaded();
      },

      createRoom:function(newRoomName){
        rooms.$add({
          name: newRoomName
        });
        rooms.$save(newRoomName);
      },

      setUser:function(newCurrentUser){
        rooms.$add({
          username: newCurrentUser
        });
        rooms.$save(newCurrentUser);
      },

      messages: function(){
        /*rooms.messages.$add({
        username: username,
        sentAt: "current time",
        content: "content"
        });*/
      }

    }

}]);
