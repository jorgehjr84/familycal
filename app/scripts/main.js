'use strict';
var familyCal = angular.module('familyCal',['ngMaterial','ngRoute']);


familyCal.config(function($routeProvider){
$routeProvider
  .when('/',
      {
        controller: 'MainController',
        templateUrl: 'views/main_page.html'
      })
     .when('/sign_up',
      {
            controller: 'MainController',
          templateUrl: 'views/sign_up.html'
      })
      .when('/sign_up_email',
       {
             controller: 'MainController',
           templateUrl: 'views/sign_up_email.html'
       })
       .when('/sign_up_facebook',
        {
              controller: 'MainController',
            templateUrl: 'views/sign_up_facebook.html'
        })
      .otherwise({ redirectTo: '/'});
});
