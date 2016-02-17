(function(){

angular.module('familyCal')
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
    .state('/',
      {
        controller: 'MainController',
        controllerAs: 'mainCtrl',
        url: "/main_page",
        templateUrl: 'views/main_page.html'
      })
     .state('/sign_up',
      {
        controller: 'MainController',
        controllerAs: 'mainCtrl',
        url: "/sign_up",
        templateUrl: 'views/sign_up.html'
      })
      .state('/sign_up_email',
       {

         controller: 'AuthController',
         controllerAs: 'authCtrl',
         url: "/sign_up_email",
         templateUrl: 'views/sign_up_email.html'
       })
       .state('/sign_up_facebook',
        {
          controller: 'MainController',
          controllerAs: 'mainCtrl',
          url: "/sign_up_facebook",
          templateUrl: 'views/sign_up_facebook.html'
        })
        .state('/myEvents',
         {
           controller: 'MainController',
           controllerAs: 'mainCtrl',
           url: "/myEvents",
           templateUrl: 'views/myEvents.html'
        })
        .state('/registerSuccess',
         {
           controller: 'MainController',
           controllerAs: 'mainCtrl',
           url: "/registerSuccess",
           templateUrl: 'views/registerSuccess.html'
         })
         .state('/login',
          {
            controller: 'MainController',
            controllerAs: 'mainCtrl',
            url: "/login",
            templateUrl: 'views/login.html'
          });
          $urlRouterProvider.otherwise('/');

    });
})();
