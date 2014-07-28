angular.module('lamApp.controllers')
.controller('CtrlList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,sharedProperties,$location,$ionicLoading) {
    var serverPrefix = sharedProperties.getServerPrefix();
    $scope.userData = {};
    var loadLists = function(){
      $ionicLoading.show({ template: 'Loading...' });
      $http.get(serverPrefix+'/lists/',{withCredentials: true})     
      .success(function (data, status, headers, config) { 
        $ionicLoading.hide();
        $scope.userData.lists = data;
      })
      .error(function (data, status, headers, config) { 
        $ionicLoading.hide();
        console.log('err');
      });
    }();
});