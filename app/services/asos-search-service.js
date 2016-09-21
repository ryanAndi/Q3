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
            "jeans"
        ],
        "Description": "jeans",
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
                "Name": "denim"
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
        "ItemCount": 6,
        "Listings": [{
            "Brand": "ASOS",
            "CurrentPrice": "NOW £35.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£17.50",
            "ProductId": 978537,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/9/4/4/2/6422449/darkstonewash/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "ASOS Kimmi Shrunken Boyfriend Jeans in Grace Dark Stonewash with Rips"
        }, {
            "Brand": "ASOS",
            "CurrentPrice": "NOW £30.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£17.50",
            "ProductId": 978537,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/8/3/4/8/6418438/white/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "ASOS Ridley High Waist Skinny Jeans in White with Busted Knee Rips"
        },{
            "Brand": "ASOS",
            "CurrentPrice": "NOW £35.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£19.00",
            "ProductId": 1004927,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/1/8/8/3/6343881/blackcoated/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "ASOS 'SCULPT ME' Premium Jeans in Black Coated"
        },{
            "Brand": "NEW LOOK",
            "CurrentPrice": "NOW £24.99",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£19.00",
            "ProductId": 1004927,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/9/5/7/6/7176759/rinse/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "New Look Notch Hem Skinny Jeans"
        },{
            "Brand": "NEW LOOK",
            "CurrentPrice": "NOW £24.99",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£19.00",
            "ProductId": 1004927,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/0/9/6/6/7296690/black/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "New Look Coated Skinny Jean"
        },{
            "Brand": "FRENCH CONNECTION",
            "CurrentPrice": "NOW £69.00",
            "HasMoreColours": false,
            "IsInSet": false,
            "PreviousPrice": "£19.00",
            "ProductId": 1004927,
            "ProductImageUrl": [
                "http://images.asos-media.com/inv/media/5/0/5/5/6785505/blueblack/image1xl.jpg"
            ],
            "RRP": "",
            "Title": "French Connection Era Rebound Stretch Skinny Jeans"
        }],
        "RedirectUrl": "",
        "SortType": "PriceAscending"
    };

});
