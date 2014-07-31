angular.module('lamApp.controllers')
.controller('CtrlList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,listService,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.userData = {};
    var linkActionMap = function(item) { item.linkAction = '#/tab/list/view/' + item.id; }
    var successCallback = function(data) { 
    	$scope.userData.lists = data; 
    	_.each($scope.userData.lists,linkActionMap);
    }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getLists(successCallback,errorCallback);
});