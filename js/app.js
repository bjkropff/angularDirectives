var app = angular.module("heroes", []);

app.controller('HeroesCtrl', function() {
    var welcome = this;

    welcome.message = "Hello, Mighty Warriors!";
});

app.directive("enter", function() {
    return function(scope, element) {
        element.bind("mouseenter", function() {
            console.log("FIREBALL TO THE FACE!!!");
        });
    };
});

app.directive("leave", function() {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            console.log("Sleep for a night.");
        });
    };
});

app.directive("myGreeting", function() {
    return function(scope, element, attrs) {
        element.text(scope.welcome.message + " " + attrs.message);
    };
});

app.directive("phuz", function() {
    return {
        restrict: "E",
        template: "<div> I am Phuz, master of the mind!!!</div>"
    };
});

app.directive("meatball", function() {
    return {
        restrict: "E",
        template: "<div>Meatball smash!!!</div>"
    };
});
