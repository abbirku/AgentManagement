'use strict';
app.factory('CRUDService', function ($http, BasedApiUrl) {
    return {
        //ok
        GetData: function (url) {
            var baseUrl = BasedApiUrl.ApiBaseUrl();

            var promise = $http({
                method: 'GET',
                contentType: 'application/json; charset=utf-8',
                url: baseUrl + url
            }).then(function (response) {
                return response.data;
            });

            return promise;
        },

        //ok
        UpdateData: function (url, dataModel) {
            var baseUrl = BasedApiUrl.ApiBaseUrl();

            var promise = $http({
                method: 'PUT',
                contentType: 'application/json; charset=utf-8',
                url: baseUrl + url,
                data: dataModel
            }).then(function (response) {
                return response.data;
            });
            return promise;
        },

        //ok
        SaveData: function (url, dataModel) {
            var baseUrl = BasedApiUrl.ApiBaseUrl();

            var promise = $http({
                method: 'POST',
                contentType: 'application/json; charset=utf-8',
                url: baseUrl + url,
                data: dataModel
            }).then(function (response) {
                return response.data;
            });
            return promise;
        },

        //ok
        DeleteData: function (url) {
            var baseUrl = BasedApiUrl.ApiBaseUrl();

            var promise = $http({
                method: 'DELETE',
                contentType: 'application/json; charset=utf-8',
                url: baseUrl + url
            }).then(function (response) {
                return response.data;
            });
            return promise;
        }
    };
});