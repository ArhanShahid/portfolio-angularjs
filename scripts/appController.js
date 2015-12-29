mainApp.controller('appController', function($scope,$document) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [1,2,3,4];

    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 1000).then(function() {
        });
    };
});