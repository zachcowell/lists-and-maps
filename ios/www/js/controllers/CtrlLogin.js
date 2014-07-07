angular.module('lamApp.controllers')
.controller('CtrlLogin', 
  function($scope,$http,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
     var serverPrefix = sharedProperties.getServerPrefix();

     $http.jsonp(serverPrefix+'/auth/facebook/').     
      success(function (data, status, headers, config) { console.log(data); }).error(function (data, status, headers, config) { /*Do something*/ });
});