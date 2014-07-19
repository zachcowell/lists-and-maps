angular.module('lamApp.controllers')
.controller('CtrlBusiness', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var businessId = $stateParams.id;
    var businessSearch = function() {
    $ionicLoading.show({ template: 'Loading...' });
    $http.get(serverPrefix+'/business/' + businessId,{withCredentials: true})     
    .success(function (data, status, headers, config) { 
      $ionicLoading.hide();
      console.log(data);
    })
    .error(function (data, status, headers, config) { 
    $ionicLoading.hide();
  });
  }();

});