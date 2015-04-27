var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function() {
    var appctrl = this;
    appctrl.callHome = function(message) {
        alert(message);
    };
});

app.directive("phone", function() {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value">' +
        '<div class="button" ng-click="dial({message:value})">Call home!</div>'
    };
});

app.controller("DrinkCtrl", function() {
    var drinkctrl = this;
    drinkctrl.ctrlFlavor = "bluberry";
});

app.directive("drink", function() {
    return {
        scope: {
            flavor: "@"
        },
        template: '<div>{{flavor}}</div>'
    };
});

app.controller("IceCreamCtrl", function() {
    var icecream = this;

    icecream.ctrlFlavor = "Raspberry";
    icecream.flavors = ['Chocolate', 'Vanilla', 'Strawberry', 'Seaweed', 'Blueberry'];

});

app.directive("icecream", function() {
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    };
});

app.directive("debug", function($compile) {
    return {
        terminal: true,
        priority: 1000000,
        link: function(scope, element) {
            var clone = element.clone();
            element.attr("style", "color: red");
            clone.removeAttr("debug");
            var clonedElement = $compile(clone)(scope);
            element.after(clonedElement);
        }
    }
})
