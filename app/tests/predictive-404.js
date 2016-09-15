describe('awesome 404', function() {

    var scope, ctrl, AsosSearchService;

    beforeEach(module('bonusMissionApp'));

    beforeEach(inject(function($rootScope, $controller, _AsosSearchService_) {
        AsosSearchService = _AsosSearchService_;
        scope = $rootScope.$new();
        ctrl = $controller('predictive404View', {
            $scope: scope
        });
    }));

    it('should be a controller', function() {
        expect(ctrl).toBeDefined();
    });
    describe('fetchResults', function(){
        beforeEach(function(){
            spyOn(AsosSearchService, 'predictiveSearchFromUrl');
        });
        it('should exist', function(){
            expect(scope.fetchResults).toBeDefined();
        });
        it('should be a function', function(){
            expect(typeof scope.fetchResults).toBe('function');
        });

        it('should call AsosSearchService', function(){
            scope.fetchResults();
            expect(AsosSearchService.predictiveSearchFromUrl).toHaveBeenCalled();
        });
    });
});
