describe('search 404', function() {

    var scope, ctrl;

    beforeEach(module('bonusMissionApp'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('search404View', {
            $scope: scope
        });
    }));

    it('should be a controller', function() {
        expect(ctrl).toBeDefined();
    });
    describe('search()', function(){
    	it('should exist', function(){
    		expect(scope.search).toBeDefined();
    	});
    	it('should be a function', function(){
			expect(typeof scope.search).toBe('function');
    	});
    });
});
