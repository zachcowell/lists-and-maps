angular.module('lamApp.controllers')
.controller('CtrlLogin', 
  function($scope,$state,$http,$stateParams,$filter,sharedProperties,$location,$ionicLoading) {
     var serverPrefix = sharedProperties.getServerPrefix();

  $scope.signIn = function(user) {
 $http.jsonp(serverPrefix+'/auth/facebook/').     
  success(function (data, status, headers, config) { console.log(data); }).error(function (data, status, headers, config) { /*Do something*/ });
    console.log('Sign-In', user);
    $state.go('tab.search');
  };

});