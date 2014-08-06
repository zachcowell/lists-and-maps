angular.module('lamApp.controllers')
.controller('CtrlAddToList', 
  function($scope,$http,$stateParams,$ionicLoading,$filter,$location,$ionicLoading,sharedProperties,listService, BusinessService) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var businessId = $stateParams.id;
    var cachedBusiness = BusinessService.getCachedBusiness();
    $scope.userData = {};
    var linkActionMap = function(item) { 
//        item.linkAction = '#/tab/list/view/' + item.id; 

    }
    var successCallback = function(data) { 
    	$scope.userData.lists = data; 
    	_.each($scope.userData.lists,linkActionMap);
        addToListTest(data);
    }
    var errorCallback = function(data) { console.log('error' + data); }
    listService.getLists(successCallback,errorCallback);


    var addToListTest = function(data){
    	var obj = 
        { 
            place: listService.yelpBusinessObjectConversion(cachedBusiness),
            listItem: data
        }
        //console.log(data);
        
        listService.addItemToList(obj,function(){},function(){});
    }
});