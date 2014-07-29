angular.module('lamApp.services')
.service('listService', function ($http,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    return {
        getLists: function (success,error) { 
          $http.get(serverPrefix+'/lists/',{withCredentials: true})     
            .success(success)
            .error(error);
        },
        createList: function(name,success,error){
          $http.post(serverPrefix+'/lists/create/',{listName: name},{withCredentials: true})     
            .success(success)
            .error(error);
        }
    };
});