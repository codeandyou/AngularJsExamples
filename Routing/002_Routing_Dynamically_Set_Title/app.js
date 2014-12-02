var routingApp = angular.module('routingApp', []);

routingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AboutUs', {
	templateUrl: 'View_AboutUs.html',
	controller: 'TitleController',
     title:"AngularJs-AboutUs"
      })

        .when('/ContactUs', {
          templateUrl: 'View_ContactUs.html',
          controller: 'TitleController',
          title:"AngularJs-ContactUs"
      });
}]);

routingApp.controller('TitleController', function($scope, $routeParams) {
});

routingApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);


