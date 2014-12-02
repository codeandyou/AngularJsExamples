var routingApp = angular.module('routingApp', []);

routingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/CustomerDetails/:customerId/:customerName', {
	templateUrl: 'Templates/Show_Customer.html',
	controller: 'CustomerDetailsController'
      });
}]);


routingApp.controller('CustomerDetailsController', function($scope, $routeParams) {
	$scope.customer_Id = $routeParams.customerId;
    $scope.customer_Name = $routeParams.customerName;

});
