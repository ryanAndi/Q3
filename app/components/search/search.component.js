//TODO: Search box component
angular.
module('bonusMissionApp').
component('search', {
    templateUrl: 'components/search/search.component.html',
    controller: function SearchController() {
        this.samples = [
            {
                name: 'Sample 1',
                snippet: 'Example of a sample 1'
            }, {
                name: 'Sample 2',
                snippet: 'Example of a sample 2'
            }, {
                name: 'Sample 3',
                snippet: 'Example of a sample 3'
            }
        ];
    }
});