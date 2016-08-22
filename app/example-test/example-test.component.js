// Register `example` component, along with its associated controller and template
angular.
module('bonusMissionApp').
component('exampleTest', {
    templateUrl: 'example-test/example-test.component.html',
    controller: function ExampleTestController() {
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