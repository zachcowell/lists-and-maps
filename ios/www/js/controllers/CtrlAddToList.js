angular.module('lamApp.controllers')
.controller('CtrlAddToList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,sharedProperties,listService) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var businessId = $stateParams.id;
    console.log(businessId);
    $scope.userData = {};
    var linkActionMap = function(item) { 
    	//item.linkAction = '#/tab/list/view/' + item.id; 

    }
    var successCallback = function(data) { 
    	$scope.userData.lists = data; 
    	_.each($scope.userData.lists,linkActionMap);
    }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getLists(successCallback,errorCallback);


    var addToListTest = function(){

    	listService.addItemToList()
    }
});