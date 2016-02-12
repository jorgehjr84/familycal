
  angular.module('familyCal')
  .controller('SubmitController', submitCtrl);

  function submitCtrl ($firebase, FIREBASE_URL, $firebaseArray){


  var self = this;
  var ref = new Firebase('https://familycal.firebaseIO.com/' + '/users');

    self.users = $firebaseArray(ref);

        self.addUser = function(){

                self.users.$add({
                  firstName: self.newUserFirstName,
                  lastName:  self.newUserLastName,
                  email:     self.newUserEmail,
                  password:  self.newUserPassword
                });

               self.newUserFirstName = '';
               self.newUserLastName = '';
               self.newUserEmail = '';
               self.newUserPassword = '';
          }
  };
