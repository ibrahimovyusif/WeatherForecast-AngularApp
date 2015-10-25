// DIRECTIVES
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});

weatherApp.directive("weatherCelsius", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherCelsius.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           findImage: "&",
           findWind: "&",
           dateFormat: "@"
       }
   }
});