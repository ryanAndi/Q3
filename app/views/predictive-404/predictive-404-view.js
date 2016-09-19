angular.
module('bonusMissionApp').
controller('predictive404View', function ($scope, $location, AsosSearchService) {

    var defaultAsosUrl = 'http://www.asos.com/creative-recreation/creative-recreation-castucci-trainers/prod/pgeproduct.aspx?iid=6692906&clr=Black&cid=4209&pgesize=36&pge=0&totalstyles=2665&gridsize=3&gridrow=2&gridcolumn=2';

    var getCurrentUrl = function() {
        if($location.search().asosUrl === undefined) {
            return defaultAsosUrl;
        }
        return $location.search().asosUrl;
    };

    $scope.fetchResults = function() {
        var curUrl = getCurrentUrl();
        $scope.searchResults = AsosSearchService.predictiveSearchFromUrl(curUrl);
    };

    $scope.fetchResults();
});
