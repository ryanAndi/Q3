describe('asos-search-service', function() {
    var AsosSearchService;
    beforeEach(function() {
        module('bonusMissionApp');
        inject(function(_AsosSearchService_) {
            AsosSearchService = _AsosSearchService_;
        });
    });


    describe('predictiveSearchFromUrl', function() {
        it('should exist', function() {
            expect(AsosSearchService.predictiveSearchFromUrl).toBeDefined();
        });
        it('should be a function', function() {
            expect(typeof AsosSearchService.predictiveSearchFromUrl).toBe('function');
        });
        it('should take in a url and return an object', function() {
            var exampleUrl = 'http://www.asos.com/creative-recreation/creative-recreation-castucci-trainers/prod/pgeproduct.aspx?iid=6692906&clr=Black&cid=4209&pgesize=36&pge=0&totalstyles=2665&gridsize=3&gridrow=2&gridcolumn=2';
            expect(typeof AsosSearchService.predictiveSearchFromUrl(exampleUrl)[0]).toBe('object');
        });
    });
});
