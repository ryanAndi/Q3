//TODO: Search service that will call ASOS search API and return the results (to be used by the predictive 404)
angular.
module('bonusMissionApp').
service('AsosSearchService', function ($http) {


    var ASOS_SEARCH_URL = '';
    var keyWords = [
        'accessories',
        'top',
        'bag',
        'blazer',
        'cap',
        'hat',
        'gift',
        'grooming',
        'hoodie',
        'sweatshirt',
        'jacket',
        'coat',
        'jeans',
        'jewellery',
        'joggers',
        'jumper',
        'cardigan',
        'leather',
        'jacket',
        'long-sleeve',
        't-shirt',
        'loungewear',
        'oversized',
        'longline',
        'polo-shirt',
        'shirt',
        'shoes',
        'boots',
        'trainers',
        'shorts',
        'suit',
        'sunglasses',
        'swimwear',
        'trousers',
        'chinos',
        't-shirt',
        'underwear',
        'socks',
        'vests',
        'waistcoats',
        'watches',
        'pack'
    ];

    this.predictiveSearchFromUrl = function(curUrl) {
        var brand = getBrandFromUrl(curUrl);
        var searchKeyWords = getKeyWordsFor(getProductReferenceFromUrl(curUrl));
        return sendSearchRequest(brand + ' ' + searchKeyWords.join(' '));
    };

    var getKeyWordsFor = function(productName) {
        var matchingKeyWords = [];
        for(var key in keyWords) {
            if(productName.search(key)) {
                matchingKeyWords.push(key);
            }
        }
        return matchingKeyWords;
    };

    var getBrandFromUrl = function(url) {
        return url.split('/')[3];
    };

    var sendSearchRequest = function(searchTerm) {
        /* TODO: make request to ASOS API. Probably return a promise.
        build request
        $http.get();
        */
        return exampleJson.Listings;
    };

    var getProductReferenceFromUrl = function(url) {
        return url.split('/')[4];
    };

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

});