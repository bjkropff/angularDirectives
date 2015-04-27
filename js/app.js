var app = angular.module("heroes", []);

app.controller('HeroesCtrl', function() {
    var welcome = this;

    welcome.message = "Hello, Mighty Warriors!";

    welcome.dealDamage = function(ability) {
        alert("You dealt damage! " + ability);
    };
});

app.directive("fireball", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            element.addClass(attrs.fireball);
        });
    };
});

app.directive("fireball", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            element.removeClass(attrs.fireball);
        });
    };
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
        scope: {
            damage: "&"
        },
        template: '<input type="text" ng-model="ability">' +
        '{{ability}}' +
        '<button ng-click="damage({ability: ability})">Deal Damage</button>'
    };
});

app.directive("meatball", function() {
    return {
        restrict: "E",
        template: "<div>Meatball smash!!!</div>"
    };
});

app.directive("spyro", function() {
    return{
        restrict: "A",
        link: function () {
            console.log("Spyro::DOUBLE ROUNDHOUSE-KICK TO THE FACE!!");
        }
    };
});

//****************************//****************************//****************************

app.controller('InventoryCtrl', function() {
    var inventoryCtrl = this;

    inventoryCtrl.logItem = function(item) {
        alert("You've added the item " + item);
    };
});

app.directive("inventory", function() {
    return {
        restrict: "E",
        scope: {
            add: "&"
        },
        template: '<input type="text" ng-model="item">' +
        ' {{item}}' +
        ' <button ng-click="add({item: item})">Add Item</button>'
    }
})
//****************************//****************************//****************************

app.controller('EnemyCtrl', function() {
    var enemyCtrl = this;

    enemyCtrl.logEnemy = function() {
        alert("You have encountered an enemy");
    };
});

app.directive("enemy", function() {
    return {
        restrict: "E",
        scope: {
            add: "&"
        },
        template: '<input type="text" ng-model="enemy">' +
        ' {{enemy}}' +
        '<button ng-click="add({})">Search</button>'
    };
});
