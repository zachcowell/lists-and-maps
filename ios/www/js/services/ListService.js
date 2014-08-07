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
        $http.post(serverPrefix+'/lists/item/create',dataObject,{withCredentials: true})     
            .success(success)
            .error(error);  
        },
        yelpBusinessObjectConversion : function(yelpObject){
            var obj = {
                name: yelpObject.name,
                street_address1: yelpObject.location.address[0],
                street_address2: null,
                zip: yelpObject.location.postal_code,
                state: yelpObject.location.state_code,
                yelp_biz_id: yelpObject.id
            }
            if (yelpObject.location.coordinate){
                obj.lat= yelpObject.location.coordinate.latitude,
                obj.lng= yelpObject.location.coordinate.longitude
            }
            return obj;
        }
    };
});