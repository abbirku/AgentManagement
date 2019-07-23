app.controller('AgentListController', function ($scope, $location) {
    $scope.GotoAdd = function () {
        $location.path('/add');
    };

    $scope.GotoEdit = function () {
        $location.path('/edit');
    };
    console.log('Inside AgentListController');
});

app.controller('AgentAddController', function ($scope) {
    console.log('Inside AgentAddController');
});

app.controller('AgentEditController', function ($scope) {
    console.log('Inside AgentEditController');
});