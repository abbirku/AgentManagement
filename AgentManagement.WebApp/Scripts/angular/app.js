var app = angular.module('app', ['ngRoute', 'toastr']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/list', {
            templateUrl: '/Agent/AgentList',
            controller: 'AgentListController'
        })
        .when('/add', {
            templateUrl: '/Agent/AgentAdd',
            controller: 'AgentAddController'
        })
        .when('/edit/:id', {
            templateUrl: '/Agent/AgentEdit',
            controller: 'AgentEditController'
        })
        .otherwise({
            redirectTo: '/list'
        });
});

//Config Toaster
app.config(function (toastrConfig) {
    angular.extend(toastrConfig, {
        allowHtml: false,
        closeButton: true,
        closeHtml: '<button>&times;</button>',
        extendedTimeOut: 5000,
        iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        },
        messageClass: 'toast-message',
        onHidden: null,
        onShown: null,
        onTap: null,
        progressBar: true,
        tapToDismiss: true,
        templates: {
            toast: 'directives/toast/toast.html',
            progressbar: 'directives/progressbar/progressbar.html'
        },
        timeOut: 1500,
        titleClass: 'toast-title',
        toastClass: 'toast'
    });
});