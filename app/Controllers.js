
angular.module('myApp.Controllers',[])

//users controller
.controller('usersController', ['$scope', '$http', function($scope,$http) {
  
  $http.get("http://localhost:8080/users")
  .success(function(response) 
  	{
  		$scope.names = response;
  	});
}])


;


//trades controllers
// .controller('tradeController', ['$scope', '$http', function($scope,$http) {
  
//   $http.get("http://localhost:8080/orders")
//   .success(function(response) 
//   	{
//   		$scope.names = response;
//   	});
// }])
