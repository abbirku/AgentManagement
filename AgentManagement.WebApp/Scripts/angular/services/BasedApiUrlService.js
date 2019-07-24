'use strict';
app.service('BasedApiUrl', ['$http', function ($http) {
    this.ApiBaseUrl = function () {
        return "http://localhost:56070/api";
    };
}]);