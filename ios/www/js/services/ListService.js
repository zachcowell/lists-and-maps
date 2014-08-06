angular.module('lamApp.services')
.service('listService', function ($http,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    return {
        getLists: function (success,error) { 
          $http.get(serverPrefix+'/lists/',{withCredentials: true})     
            .success(success)
            .error(error);
        },
        getList: function(id,success,error){
          $http.get(serverPrefix+'/list/'+id,{withCredentials: true})     
            .success(success)
            .error(error);
        },
        createList: function(name,success,error){
          $http.post(serverPrefix+'/lists/create/',{listName: name},{withCredentials: true})     
            .success(success)
            .error(error);
        },
        addItemToList: function(dataObject,success,error){
        $http.post(serverPrefix+'/lists/item/create',{place: dataObject.place,listItem: dataObject.listItem},{withCredentials: true})     
            .success(success)
            .error(error);  
        },
        yelpBusinessObjectConversion : function(yelpObject){
            return {
                name: yelpObject.name,
                street_address1: yelpObject.location.address,
                street_address2: null,
                zip: yelpObject.location.postal_code,
                state: yelpObject.location.state_code,
                lat: yelpObject.location.coordinate.latitude,
                lng: yelpObject.location.coordinate.longitude
            }
        }
    };
});