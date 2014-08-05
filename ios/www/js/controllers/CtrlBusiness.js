angular.module('lamApp.controllers')
.controller('CtrlBusiness', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,BusinessService) {
    var businessId = $stateParams.id;
    $scope.business = {};
    
    var successCallback = function (data) { 
      $ionicLoading.hide();
      $scope.business = data;
      BusinessService.setCachedBusiness(data);
    }

    var errorCallback = function(){ $ionicLoading.hide(); }
    BusinessService.getBusiness(businessId,successCallback,errorCallback);

});