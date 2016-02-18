angular.module('familyCal')
  .controller('AuthController', authCtrl);




  function authCtrl ($firebase, FIREBASE_URL, $firebaseArray, $firebaseAuth, $state){


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

    function register(user,$stateProvider){
        $state.go('registerSuccess');
        return firebaseAuthObject.$createUser(user)
         }


  };
