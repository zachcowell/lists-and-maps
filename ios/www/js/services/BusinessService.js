angular.module('lamApp.services')
.service('BusinessService', function ($http,sharedProperties) {
    var serverPrefix = sharedProperties.getServerPrefix();
    var cache = {};

    return {
        getBusiness: function (businessId,success,error) { 
            $http.get(serverPrefix+'/business/' + businessId,{withCredentials: true})     
                .success(success)
                .error(error);
        },
        setCachedBusiness: function(businessObject){ cache.business = businessObject; },
        getCachedBusiness: function(){ return cache.business; }
    };
});