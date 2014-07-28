angular.module('lamApp.controllers')
.controller('CtrlCreateList', 
  function($scope,$http,$window,$stateParams,$ionicLoading,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.listData = { listName: "" }; 
    $scope.createList = function(){
    	console.log($scope.listData.listName);
    	$ionicLoading.show({ template: 'Loading...' });
		$http.post(serverPrefix+'/lists/create/',{listName: $scope.listData.listName},{withCredentials: true})     
	    .success(function (data, status, headers, config) { 
	      $ionicLoading.hide();
	      $window.location.href = '/#/tab/list';
	    })
	    .error(function (data, status, headers, config) { 
	      $ionicLoading.hide();
	    });
    }

});