angular.module('lamApp.controllers')
.controller('CtrlLogin', 
  function($scope,$state,$http,$resource,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();

	$scope.signIn = function() {
		var ref = window.open(serverPrefix+'/auth/facebook/', '_blank', 'location=no');
  		ref.addEventListener('loadstart', function() { console.log(event.url); });
  		ref.addEventListener('loadstop', function() { console.log(event.url); });
  		$state.go('tab.search');
	};

});