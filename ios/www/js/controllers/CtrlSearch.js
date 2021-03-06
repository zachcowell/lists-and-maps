angular.module('lamApp.controllers')
.controller('CtrlSearch', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.searchString = {text:''};
    $scope.results = [];

  $scope.performSearch = function() {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(serverPrefix+'/search/' + $scope.searchString.text,{withCredentials: true})     
    .success(function (data, status, headers, config) { 
      $ionicLoading.hide();
      $scope.results = data.businesses;
    })
    .error(function (data, status, headers, config) { 
    $ionicLoading.hide();
  });
  };



});