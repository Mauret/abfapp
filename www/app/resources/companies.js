app.factory('CompaniesRes', function($resource) {
    return $resource(beUrlMap.baseLocal + beUrlMap.companies);
});