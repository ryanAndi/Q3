var app = angular.module('bonusMissionApp', []);

app.controller('mainController', function($scope, $timeout) {
    var adjectives = [
        "amazing",
        "brilliant",
        "wonderful",
        "awesome",
        "creative",
        "Ben's inferiors",
        "pioneers",
        "enthusiastic",
        "imaginative",
        "optimistic",
        "versatile"
    ];
    $scope.option = adjectives[0];

    var selectOption = function() {
        $scope.option = adjectives[Math.floor(Math.random() * adjectives.length)];
        $timeout(function() {
            selectOption();
        }, 3000)
    };

    selectOption();
});
