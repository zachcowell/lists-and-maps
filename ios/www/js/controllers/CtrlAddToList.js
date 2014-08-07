angular.module('lamApp.controllers')
.controller('CtrlAddToList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,sharedProperties,listService, BusinessService) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var businessId = $stateParams.id;
    var cachedBusiness = BusinessService.getCachedBusiness();
    $scope.userData = {};

    var linkActionMap = function(item) { 
        item.ngFunc = function(){ 
            addListItemToPlace(item);
        };
    }
    var successCallback = function(data) { 
    	$scope.userData.lists = data; 
    	_.each($scope.userData.lists,linkActionMap);
    }

    var errorCallback = function(data) { console.log('error' + data); }
    
    var addListItemToPlace = function(list){
        var listRedirectCallback = function(){ $location.path('tab/list/view/' + list.id); }
        var obj = {
            place: listService.yelpBusinessObjectConversion(cachedBusiness),
            list_id: list.id
        }
        listService.addItemToList(obj,listRedirectCallback,listRedirectCallback);
    }

    listService.getLists(successCallback,errorCallback);

});