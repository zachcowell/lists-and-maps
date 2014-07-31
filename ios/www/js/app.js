var LAM = angular.module('lamApp', [
  'ionic',
  'lamApp.controllers',
  'lamApp.services',
  'ngResource',
  //'lamApp.filters',
  //'fsCordova',
  //'ngAnimate',
  'leaflet-directive'
]);

angular.module('lamApp.services', []);
angular.module('lamApp.controllers', []);


LAM.run(function($ionicPlatform) {
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
    .state('login', {url: "/login", templateUrl: "templates/Application/Login.html", controller: 'CtrlLogin'}) 
    .state('tab', {url: "/tab", abstract: true, templateUrl: "templates/Application/Tabs.html"})
    .state('tab.search', {url: "/search", views: {'tab-search' :{templateUrl: "templates/Search/Home.html", controller: "CtrlSearch"} } })
    .state('tab.business', {url: "/business/:id", views: {'tab-search' :{templateUrl: "templates/Business/Home.html", controller: "CtrlBusiness"} } })
    .state('tab.listsHome', {url: "/list", views: {'tab-list' :{templateUrl: "templates/List/Home.html", controller: "CtrlList"} } })
    .state('tab.listsCreate', {url: "/list/create", views: {'tab-list' :{templateUrl: "templates/List/Create.html", controller: "CtrlCreateList"} } })
    .state('tab.viewList', {url: "/list/view/:id", views: {'tab-list' :{templateUrl: "templates/List/View.html", controller: "CtrlViewList"} } })
    .state('tab.addToList', {url: "/add/list/:id", views: {'tab-search' :{templateUrl: "templates/List/Home.html", controller: "CtrlAddToList"} } })
    .state('tab.addToNewList', {url: "/add/new/list/:id", views: {'tab-search' :{templateUrl: "templates/Business/AddToNewList.html", controller: "CtrlAddToNewList"} } })
    .state('tab.more', {url: "/more", views: {'tab-more' :{templateUrl: "templates/More/Home.html"} } }) 
    .state('tab.faq', {url: "/more/faq", views: {'tab-more' :{templateUrl: "templates/More/FAQ.html"} } }); 
  $urlRouterProvider.otherwise('/login');
});


