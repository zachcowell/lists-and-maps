angular.module('lamApp.controllers')
.controller('CtrlList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,listService,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.userData = {};
    var successCallback = function(data) { $scope.userData.lists = data; }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getLists(successCallback,errorCallback);
});