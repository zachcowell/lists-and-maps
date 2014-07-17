angular.module('lamApp.controllers')
.controller('CtrlLogin', 
  function($scope,$state,$http,$resource,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();

	var ref = window.open(serverPrefix+'/auth/facebook/', '_blank', 'location=no');
  	ref.addEventListener('loadstart', function() { console.log(event.url); });
  	ref.addEventListener('loadstop', function() { console.log(event.url); });

	
	/*$scope.signIn = function() {
		$http.jsonp(serverPrefix+'/auth/facebook/')     
		.success(function (data, status, headers, config) { 
			console.log('success')
			//$state.go('tab.search');
		})	
		.error(function (data, status, headers, config) { console.log(status) });
		//console.log('Sign-In', user);
		//$state.go('tab.search');
	};*/

});