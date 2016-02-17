(function(){

angular.module('familyCal')
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/');
$stateProvider
    .state('/',
      {
        controller: 'MainController',
        templateUrl: 'views/main_page.html'
      })
     .state('/sign_up',
      {
            controller: 'MainController',
          templateUrl: 'views/sign_up.html'
      })
      .state('/sign_up_email',
       {
             controller: 'AuthController',
             controllerAs: 'authCtrl',
           templateUrl: 'views/sign_up_email.html'
       })
       .state('/sign_up_facebook',
        {
              controller: 'MainController',
            templateUrl: 'views/sign_up_facebook.html'
        })
        .state('/myEvents',
         {
               controller: 'MainController',
             templateUrl: 'views/myEvents.html'
        })
        .state('/registerSuccess',
         {
               controller: 'MainController',
             templateUrl: 'views/registerSuccess.html'
         })
         .state('/login',
          {
                controller: 'MainController',
              templateUrl: 'views/login.html'
          });
    });
})();
