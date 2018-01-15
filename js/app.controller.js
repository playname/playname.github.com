angular.module("pApp")
    .controller("LinksCtrl", ["$scope", "$http", function ($scope, $http) {
        $http.get("resources/links.json").then(function (response) {
            $scope.links = response.data;
        });
    }])
    .controller("NewsCtrl", ["$scope", "$http", "$interval", "$log", "utils", function ($scope, $http, $interval, $log, utils) {
        const nUrl = "http://feeds.bbci.co.uk/news/world/rss.xml";
        
        $scope.show = false;
        $scope.action = "Show";
        $http.get(nUrl).then(function(response) {
            $scope.current = response.data;
        });
        
        $scope.showHide = function () {
            $scope.show = !$scope.show;
            $scope.show ? $scope.action = "Hide" : $scope.action = "Show";
        };
        
        var interval;
        $scope.check = function () {
            if (angular.isDefined(interval)) return;
            
            var test;
            $http.get(nUrl).then(function (response) {
                test = response.data;
            });
            
            interval = $interval(function () {
                if (test != $scope.current) {
                    $scope.current = test;
                    $log.log("Found news update.");
                    utils.showToast("New news available");
                }
            }, 5000);
        };
    }])
    .controller("ToastCtrl", ["$scope", "$mdToast", function ($scope, $mdToast) {
        $scope.closeToast = function () {
            $mdToast.hide();
        };
    }])
    .controller("bgCtrl", ["$scope", function ($scope) {
        $scope.color = {
            red: 51,
            green: 51,
            blue: 51
        };
    }]);