angular.module('lamApp.controllers')
.controller('CtrlSearch', 
  function($scope,$http,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();

    $scope.results = [];

  $scope.performSearch = function() {
    console.log(serverPrefix+'/search')
    $http.get(serverPrefix+'/search',{withCredentials: true})     
    .success(function (data, status, headers, config) { 
      console.log(data);
      $scope.results = data.businesses;
    })
    .error(function (data, status, headers, config) { /*Do something*/ });
  };



});