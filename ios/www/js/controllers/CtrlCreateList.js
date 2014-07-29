angular.module('lamApp.controllers')
.controller('CtrlCreateList', 
  function($scope,$http,$window,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,sharedProperties,listService) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.listData = { listName: "" }; 
    
    var successCallback = function(){ $window.location.href = '/#/tab/list'; }
    var errorCallback = function() { console.log('err'); }
    
    $scope.createList = function(){ listService.createList($scope.listData.listName,successCallback,errorCallback); }


});