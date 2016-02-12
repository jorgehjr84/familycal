
  angular.module('familyCal')
  .controller('AuthController', authCtrl);

authCtrl.$inject = ['$firebaseAuth'];

  function authCtrl ($firebase, FIREBASE_URL, $firebaseArray,$firebaseAuth){
      var self = this;
      var ref = new Firebase('https://familycal.firebaseIO.com/' + '/users');
      var firebaseAuthObject = $firebaseAuth(ref);

      self.user = {
        firstName: self.newUserFirstName,
        lastName:  self.newUserLastName,
        email:     self.newUserEmail,
        password:  self.newUserPassword
      };

      self.register = register;

      function register(user){
          return firebaseAuthObject.$createUser(user);
      }

  // self.users = $firebaseArray(ref);
  //
  //   self.addUser = function(){
  //
  //         self.users.$add({
  //                 firstName: self.newUserFirstName,
  //                 lastName:  self.newUserLastName,
  //                 email:     self.newUserEmail,
  //                 password:  self.newUserPassword
  //               });
  //
  //              self.newUserFirstName = '';
  //              self.newUserLastName = '';
  //              self.newUserEmail = '';
  //              self.newUserPassword = '';
  //         }
  };
