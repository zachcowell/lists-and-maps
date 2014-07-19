var LAM = angular.module('lamApp', [
  'ionic',
  'lamApp.controllers',
  'ngResource',
  //'lamApp.filters',
  //'fsCordova',
  //'ngAnimate',
  'leaflet-directive'
]);

angular.module('lamApp.controllers', []);

LAM.service('sharedProperties', function () {
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
}).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});


LAM.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {url: "/login", templateUrl: "templates/login.html", controller: 'CtrlLogin'}) 
    .state('tab', {url: "/tab", abstract: true, templateUrl: "templates/tabs.html"})
    .state('tab.search', {url: "/search", views: {'tab-search' :{templateUrl: "templates/search.html", controller: "CtrlSearch"} } })
    .state('tab.business', {url: "/business/:id", views: {'tab-search' :{templateUrl: "templates/business.html", controller: "CtrlBusiness"} } })
    .state('tab.more', {url: "/more", views: {'tab-more' :{templateUrl: "templates/more.html"} } }) 
    .state('tab.faq', {url: "/more/faq", views: {'tab-more' :{templateUrl: "templates/faq.html"} } }); 
  $urlRouterProvider.otherwise('/login');
});


