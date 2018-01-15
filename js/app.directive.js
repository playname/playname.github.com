pApp
    .directive("news", function () {
        return {
            restrict: "E",
            template: "<iframe class='hidden-xs' width='600' height='500' src='http://feeds.bbci.co.uk/news/world/rss.xml' frameborder='0' ng-show='show' id='news'></iframe>"
        };
    })
    .directive("nbtn", function () {
        return {
            restrict: "E",
            template: "<md-button class='md-raised md-primary hidden-xs' ng-click='showHide(); check();' id='nBtn'>{{action}} BBC news</md-button>"
        };
    });