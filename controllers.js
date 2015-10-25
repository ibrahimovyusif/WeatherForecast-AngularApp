// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});


    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, appid: "bd82977b86bf27fb59a04b61b657fb6f"});
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    $scope.convertToCelsius = function(degK) {
        return Math.round(degK - 273);            
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
    $scope.findWind = function(windSpeed){
        $scope.windSpeed = windSpeed;
        
        if(windSpeed > 2) {
            $scope.windSpeed = "http://cliparts.co/cliparts/qcB/Ayr/qcBAyr6Xi.jpg";
        }
        
        return $scope.windSpeed;
    }
    
    $scope.findImage = function(degK){
        if((degK - 273)>20){
            $scope.weatherImage = "http://icongal.com/gallery/image/43086/weather_sun_sunny.png";
        } else if((degK - 273)>15) {
            $scope.weatherImage = "http://cliparts.co/cliparts/kc8/odL/kc8odL7ri.jpg";
            
        } else { 
            $scope.weatherImage = "http://cliparts.co/cliparts/gce/o9b/gceo9brdi.png";
           // $scope.weatherImage = "http://cliparts.co/cliparts/ki8/nxe/ki8nxeX8T.jpg";
        }  
        return $scope.weatherImage;
    }
    
     $scope.findImage(290);
    
    console.log($scope.weatherImage);
    console.log($scope.weatherResult);
    console.log($scope.findWind);
}]);