describe('exampleTest', function() {

    // Load the module that contains the `example` component before each test
    beforeEach(module('bonusMissionApp'));

    // Test the controller
    describe('ExampleTestController', function() {

        it('should create a `samples` model with 3 samples', inject(function($componentController) {
            var ctrl = $componentController('exampleTest');

            expect(ctrl.samples.length).toBe(3);
        }));

    });

});