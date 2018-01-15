pApp
    .factory("utils", ["$mdToast", function ($mdToast) {
        return {        
            showToast: function (message, close) {
                if (!close)
                    close = "Close";
                
                $mdToast.show({
                    hideDelay : 3000,
                    position  : "top right",
                    controller: "ToastCtrl",
                    template: "\
                        <md-toast>\
                            <span class='md-toast-text'>" + message + "</span>\
                            <md-button ng-click='closeToast()'>"
                                + close +
                            "</md-button>\
                        </md-toast>\ "
                });
            }
        };
    }]);