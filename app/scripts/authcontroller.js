angular.module('familyCal')
  .controller('AuthController', authCtrl);



// submitCtrl.$inject = ['$firebaseAuth'];

  function authCtrl ($firebase, FIREBASE_URL, $firebaseArray, $firebaseAuth){


  var self = this;
  var ref = new Firebase('https://familycal.firebaseIO.com/');
  var firebaseAuthObject = $firebaseAuth(ref);

    self.user = {
      firstName: self.firstName,
      lastName: self.lastName,
      email: self.email,
      password: self.password
    };

    self.firstName = "";
    self.lastName = "";
    self.email = "";
    self.password = "";

    self.register = register;

    function register(user){
        return firebaseAuthObject.$createUser(user);
    };



    // self.users = $firebaseArray(ref);
    //
    //     self.addUser = function(){
    //
    //             self.users.$add({
    //               firstName: self.newUserFirstName,
    //               lastName:  self.newUserLastName,
    //               email:     self.newUserEmail,
    //               password:  self.newUserPassword
    //             });
    //

    //       }
  };
