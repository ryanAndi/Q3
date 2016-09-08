angular.
module('bonusMissionApp').
controller('search404View', function($scope) {

    var exampleJson = {
        "AlsoSearched": [
            "dresses"
        ],
        "Description": "dressses",
        "Facets": [{
            "FacetValues": [{
                "Count": 4,
                "Id": "base_colour_2",
                "Name": "Green"
            }, {
                "Count": 1,
                "Id": "base_colour_16",
                "Name": "Grey"
            }, {
                "Count": 3,
                "Id": "base_colour_9",
                "Name": "Pink"
            }, {
                "Count": 3,
                "Id": "base_colour_5",
                "Name": "White"
            }],
            "Id": "base_colour",
            "Name": "Colour",
            "Sequence": 0
        }, {
            "FacetValues": [{
                "Count": 1,
                "Id": "46",
                "Name": "£46.00"
            }],
            "Id": "currentprice",
            "Name": "Current Price",
            "Sequence": 0
        }],
        "ItemCount": 2,
        "Listings": [{
            "Brand": "Gap Kids",
            "CurrentPrice": "NOW £13.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£17.50",
            "ProductId": 978537,
            "ProductImageUrl": [
                "http://images.asos.com/inv/y/127/1178/978537/grngingh/image1l.jpg"
            ],
            "RRP": "",
            "Title": "Gap Crinkle Dress"
        }, {
            "Brand": "Littlehorn",
            "CurrentPrice": "NOW £15.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£19.00",
            "ProductId": 1004927,
            "ProductImageUrl": [
                "http://images.asos.com/inv/x/127/1178/1004927/green/image1l.jpg"
            ],
            "RRP": "",
            "Title": "Littlehorn When My Love Grows Dress"
        }],
        "RedirectUrl": "",
        "SortType": "PriceAscending"
    };
    

    $scope.search = function(string){
    	$scope.listings = exampleJson.Listings;
    };



});
