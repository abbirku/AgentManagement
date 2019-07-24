app.factory('DayMonthyYearService', function ($http, $rootScope, $filter) {
    
    var ConvertsApiDateToJsDate = function (date) {
        if (typeof date === 'string') {
            var dashIndex = date.indexOf('-');
            var theDate = (dashIndex > -1) ? date.substring(0, 10) : [];
            theDate = (theDate.length === 10) ? theDate.split('-') : '';
            if (theDate !== '' && theDate.length === 3) {
                return new Date(theDate[0], theDate[1] - 1, theDate[2]);
            } else
                return new Date();
        } else
            return new Date();
    };

    var GetJsDate = function (dateObj) {
        return new Date(dateObj.getTime() + Math.abs(dateObj.getTimezoneOffset() * 60000));
    };

    return {
        ConvertsApiDateToJsDate: ConvertsApiDateToJsDate,
        GetJsDate: GetJsDate
    };
});