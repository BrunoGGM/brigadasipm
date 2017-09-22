var app = angular.module('acopio', []);
app.controller('acopioCtrl', function($scope, $http) {
	$http.get("https://script.google.com/macros/s/AKfycbxj4IZMmbBh1vD_oDLDOnigsG5iSWjxVBvDP98lLyc9SmS6VCk/exec", { responseType: "json" }).then(function (response) {
		$scope.data = response.data;
	});
});