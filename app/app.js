var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('pick', {
            url: '/pick',
            templateUrl: 'HeaderView.html'


        }).state('pick.box', {
            url: '/box',
            templateUrl: 'PickBoxView.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
          url: '/about',
            templateUrl: 'partial-about.html'     
        })
           .state('Grid', {
               url: '/grid',
               templateUrl: 'partial-about.html'
           })

              .state('Scatter', {
                  url: '/Scatter',
                  templateUrl: 'partial-about.html'
              })
          
        
         .state('homeIn', {
          url: '/home/ff',
           templateUrl: 'partial-about.html'     
        });
        


});