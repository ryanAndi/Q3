angular.
module('bonusMissionApp').
controller('search404View', function($scope) {
    var baseUrl = "http://www.asos.com/search/";
    $scope.search = function(){
        var queryStart = $scope.query.replace(/ /g,"-");
        var queryEnd = $scope.query.replace(/ /g,"+");
        var queryString = baseUrl + queryStart + '?q=' + queryEnd;
        
        window.location.replace(queryString);
    };
});
