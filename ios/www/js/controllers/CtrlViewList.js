angular.module('lamApp.controllers')
.controller('CtrlViewList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,listService,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var listId = $stateParams.id;
    $scope.userData = {};
    var successCallback = function(data) { 
    	$scope.userData.list = data[0]; 
    	
    	//_.each($scope.userData.list.listItems,function(x){console.log(x)})
    	//console.log($scope.userData.list); 
    }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getList(listId,successCallback,errorCallback);
});