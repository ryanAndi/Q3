angular.
module('bonusMissionApp').
config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html"
            })
            .state('search404', {
                url: "/search",
                templateUrl: "views/search-404/search-404-view.html",
                controller: "search404View"
            })
            .state('predictive404', {
                url: "/predictive",
                templateUrl: "views/predictive-404/predictive-404-view.html",
                controller: "predictive404View"
            })
            .state('awesome404', {
                url: "/awesome",
                templateUrl: "views/awesome-404/awesome-404-view.html",
                controller: "awesome404View"
            });

    }]);