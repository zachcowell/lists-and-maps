angular.module('lamApp.controllers')
.controller('CtrlAddToList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,sharedProperties,listService) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var businessId = $stateParams.id;
    $scope.userData = {};
    var successCallback = function(data) { $scope.userData.lists = data; }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getLists(successCallback,errorCallback);
});