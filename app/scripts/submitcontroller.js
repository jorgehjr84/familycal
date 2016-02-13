angular.module('familyCal')
  .controller('SubmitController', submitCtrl);



// submitCtrl.$inject = ['$firebaseAuth'];

  function submitCtrl ($firebase, FIREBASE_URL, $firebaseArray, $firebaseAuth){


  var self = this;
  var ref = new Firebase('https://familycal.firebaseIO.com/');
  var firebaseAuthObject = $firebaseAuth(ref);

    self.user = {
      newUserFirstName: '',
      newUserLastName: '',
      newUserEmail: '',
      newUserPassword: ''
    };

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
    //            self.newUserFirstName = '';
    //            self.newUserLastName = '';
    //            self.newUserEmail = '';
    //            self.newUserPassword = '';
    //       }
  };
