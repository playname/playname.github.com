angular.module("hash", ["ngMaterial"])
    .controller("hashCtrl", ["$scope", function ($scope) {
        $scope.types = ("SHA1 SHA3 A").split(" ").map(function (type) {
            return {abbrev: type};
        });
        
        $scope.input = {
            type: "SHA1",
            string: "Hello World"
        };
        $scope.output = "";
        
        $scope.calculate = function() {
            if      ($scope.input.type === "SHA1")  $scope.output = sha1($scope.input.string);
            else if ($scope.input.type === "SHA3")  $scope.output = sha3_512($scope.input.string);
            /*else if ($scope.input.type === "A")     $scope.output = $scope.a($scope.input.string);*/
        };
        
        /*$scope.a = function (string) {
            var blocks = [],  res = [];
            var holes = 0;
            var fillers = [
                0xFC,
                0xA2,
                0xC4,
                0xFF,
                0xD9,
                0x02,
                0xED,
                0xB8,
                0x09
            ];
            
            // Break string into 8 less blocks
            for (var i = 0; i < string.length; i++) {
                if (Math.floor(i % (string.length / 8)) === 0)
                    blocks[i] = string[i];
                
                if (blocks[i] == null) {
                    blocks[i] = fillers[holes];
                    holes++;
                } else
                    blocks[i] = blocks[i].charCodeAt(0);
                
                blocks[i] = (blocks[i] << 8) / 255; // Quick math
            }
            
            res = blocks.join("").split(".").join("");
            
            return res;
        };*/
    }]);
