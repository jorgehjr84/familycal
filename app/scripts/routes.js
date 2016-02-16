(function(){

angular.module('familyCal')
.config(function($routeProvider){
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
             controller: 'AuthController',
             controllerAs: 'authCtrl',
           templateUrl: 'views/sign_up_email.html'
       })
       .when('/sign_up_facebook',
        {
              controller: 'MainController',
            templateUrl: 'views/sign_up_facebook.html'
        })
        .when('/myEvents',
         {
               controller: 'MainController',
             templateUrl: 'views/myEvents.html'
        })
        .when('/registerSuccess',
         {
               controller: 'authCtrl',
             templateUrl: 'views/registerSuccess.html'
        })
        .when('/login',
         {
               controller: 'MainController',
             templateUrl: 'views/login.html'
        })
      .otherwise({ redirectTo: '/'});
    });
})();
