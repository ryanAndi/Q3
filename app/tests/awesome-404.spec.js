describe('awesome 404', function() {

    var scope, ctrl;

    beforeEach(module('bonusMissionApp'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('awesome404View', {
            $scope: scope
        });
    }));

    it('should be a controller', function() {
        expect(ctrl).toBeDefined();
    });
});
