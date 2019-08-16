app.controller('AgentListController', function ($scope, $location, toastr, CRUDService) {
    $scope.agentList = [];
    $scope.SelectedObjId = 0;

    $scope.LoadList = function () {
        CRUDService.GetData('/v1/Agent/GetAll').then(function (response) {
            if (response.success) {
                $scope.agentList = response.data;
            }
        });
    };

    $scope.Init = function () {
        $scope.LoadList();
    };
    $scope.Init();

    $scope.SelectedObjById = function (id) {
        $scope.SelectedObjId = id;
    };

    $scope.Delete = function () {
        CRUDService.DeleteData('/v1/Agent/Delete/' + $scope.SelectedObjId).then(function (response) {
            if (response.success) {
                toastr.success(response.successMessage, 'Success');
                $scope.LoadList();
            } else {
                toastr.error(response.errorMessage, 'Error');
            }
        });

        angular.element('.modal').modal('hide');
    };

    $scope.LinkToAdd = function () {
        $location.path('/add');
    };

    $scope.LinkToEdit = function (id) {
        $location.path('/edit/' + id);
    };
});

app.controller('AgentAddController', function ($scope, CRUDService, $location, toastr, DayMonthyYearService) {
    $scope.agent = {
        Code: '',
        Email: '',
        Name: '',
        Street: '',
        City: '',
        State: '',
        Zip: '',
        Country: '',
        Mobile: '',
        Phone: '',
        ContactPerson: '',
        ReferredBy: '',
        Logo: '',
        Status: 0,
        Balance: 0,
        LoginUrl: '',
        SecurityCode: '',
        SMTPServer: '',
        SMTPPort: 0,
        SMTPUsername: '',
        SMTPPassword: '',
        Deleted: false,
        CreatedOnUtc: new Date(),
        UpdatedOnUtc: new Date(),
        CurrentBalance: 0
    };

    $scope.BackToList = function () {
        $location.path('/list');
    };

    $scope.Submit = function () {
        $scope.agent.CreatedOnUtc = DayMonthyYearService.GetJsDate($scope.agent.CreatedOnUtc);
        $scope.agent.UpdatedOnUtc = DayMonthyYearService.GetJsDate($scope.agent.UpdatedOnUtc);

        CRUDService.SaveData('/v1/Agent/Insert', $scope.agent).then(function (response) {
            if (response.success) {
                toastr.success(response.successMessage, 'Success');
                $location.path('/list');
            } else {
                toastr.error(response.errorMessage, 'Error');
            }
        });
    };
});

app.controller('AgentEditController', function ($scope, CRUDService, toastr, $location, $routeParams, DayMonthyYearService) {
    $scope.Init = function () {
        CRUDService.GetData('/v1/Agent/GetBy/' + $routeParams.id).then(function (response) {
            $scope.agent = response.data;
            console.log($scope.agent.CreatedOnUtc);
            console.log($scope.agent.UpdatedOnUtc);
        }).then(function () {
            $scope.agent.CreatedOnUtc = DayMonthyYearService.ConvertsApiDateToJsDate($scope.agent.CreatedOnUtc);
            $scope.agent.UpdatedOnUtc = DayMonthyYearService.ConvertsApiDateToJsDate($scope.agent.UpdatedOnUtc);
            console.log($scope.agent.CreatedOnUtc);
            console.log($scope.agent.UpdatedOnUtc);
        });
    };
    $scope.Init();

    $scope.BackToList = function () {
        $location.path('/list');
    };

    $scope.Update = function () {
        $scope.agent.CreatedOnUtc = DayMonthyYearService.GetJsDate($scope.agent.CreatedOnUtc);
        $scope.agent.UpdatedOnUtc = DayMonthyYearService.GetJsDate($scope.agent.UpdatedOnUtc);

        CRUDService.UpdateData('/v1/Agent/Update', $scope.agent).then(function (response) {
            if (response.success) {
                toastr.success(response.successMessage, 'Success');
                $location.path('/list');
            } else {
                toastr.error(response.errorMessage, 'Error');
            }
        });
    };
});