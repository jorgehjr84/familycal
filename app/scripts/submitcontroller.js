
  angular.module('familyCal')
  .controller('SubmitController', submitCtrl);

  function submitCtrl ($firebase, FIREBASE_URL){

    this.user = {};
      var ref = new Firebase('https://familycal.firebaseIO.com/' + '/users');

}
