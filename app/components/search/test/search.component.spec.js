describe('searchComponentTest', function() {

    // Load the module that contains the `search` component before each test
    beforeEach(module('bonusMissionApp'));

    // Test the controller
    describe('SearchController', function() {

        it('should create a `samples` model with 3 samples', inject(function($componentController) {
            var ctrl = $componentController('search');

            expect(ctrl.samples.length).toBe(3);
        }));

    });

});