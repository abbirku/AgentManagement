var app = angular.module('app', ['ngRoute', 'toastr']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/agentlist', {
            templateUrl: '/Agent/AgentList',
            controller: 'AgentListController'
        })
        .when('/agentadd', {
            templateUrl: '/Agent/AgentAdd',
            controller: 'AgentAddController'
        })
        .when('/agentedit', {
            templateUrl: '/Agent/AgentEdit',
            controller: 'AgentEditController'
        })
        .otherwise({
            redirectTo: '/agentlist'
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