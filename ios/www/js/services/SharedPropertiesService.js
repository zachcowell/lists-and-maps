angular.module('lamApp.services')
.service('sharedProperties', function () {
    var obj = 
        { 
          //serverPrefix: 'http://healthi.herokuapp.com',
          serverPrefix: 'http://localhost:3000'//,
          //lastSearch: 'am'
        };

    return {
        getProperty: function (property) { return obj[property]; },
        setProperty: function(property,value) { obj[property] = value; },
        getServerPrefix: function(){ return this.getProperty('serverPrefix'); } //because im lazy
    };
});