(function() {
  'use strict';
  angular.module('familyCal')

  .controller('SubmitController', SubmitController);


function submitController($scope){

var ref = new Firebase('https://familycal.firebaseIO.com/' + '/users');

    $scope.submitUser = function(){

        $scope.users.$add({
            firstName: $scope.newfirstName,
            lastName: $scope.newlastName,
            email: $scope.newemail,
            password: $scope.newpassword
          });

      $scope.newfirstName = "";
      $scope.newlastName = "";
      $scope.newemail = "";
      $scope.newpassword = "";
    }
}
});
