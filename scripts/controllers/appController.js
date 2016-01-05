mainApp.controller('appController', function($scope,$document,$uibModal) {

    $scope.myInterval = 0;
    $scope.noWrapSlides = false;
    $scope.slides = [1,2,3,4];

    $scope.toTheTop = function() {
        $document.scrollTopAnimated(0, 1000).then(function() {
        });
    };


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'projects/combat.html',
            controller: 'projectController',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };




});