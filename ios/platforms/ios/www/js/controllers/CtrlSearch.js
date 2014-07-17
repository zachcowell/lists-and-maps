angular.module('lamApp.controllers')
.controller('CtrlSearch', 
  function($scope,$http,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();


  $scope.performSearch = function() {
    
    $http.get(serverPrefix+'/search?callback=JSON_CALLBACK').     
    success(function (data, status, headers, config) { 
      console.log(data)
    })
    .error(function (data, status, headers, config) { /*Do something*/ });
  };



});