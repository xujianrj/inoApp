angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array
        var pets=null;
        var dataRef = new Firebase('https://artsmesh.firebaseio.com/groups');
        dataRef.on('value', function(snapshot) {
            pets=snapshot.val();
        });

  // Some fake testing data

//  var pets = [
//    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
//    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
//    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
//    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
//  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
