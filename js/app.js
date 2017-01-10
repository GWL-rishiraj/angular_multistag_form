app = angular
.module('customDirectiveApp', ['ngAnimate', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })
            .state('form.basicinformation', {
                url: '/basicinformation',
                template: '<basicinfo>'
            })
            .state('form.profile', {
                url: '/profile',
                template: '<profilenfo>'
            })
            .state('form.payment', {
                url: '/payment',
                template: '<div paymentinfo></div>'
            })
        $urlRouterProvider.otherwise('/form/basicinformation');
    })
    .controller('formController', ['$scope', function($scope) {
        $scope.formData = {};
        $scope.processForm = function() {
            alert($scope.formData);  
        };
    }]);

app.directive("basicinfo", function() {
    return {
        restrict : "E",
        template : '<div class="form-group"><label for="name">Name</label><input type="text" class="form-control" name="name" ng-model="formData.name"></div><div class="form-group"><label for="email">Email</label><input type="text" class="form-control" name="email" ng-model="formData.email"></div><div class="form-group"><label for="name">Password</label><input type="password" class="form-control" name="password" ng-model="formData.password"><div class="form-group row"><div class="col-xs-6 col-xs-offset-3"><a ui-sref="form.profile" class="btn btn-block btn-info">Profile <span class="glyphicon glyphicon-circle-arrow-right"></span></a></div></div>'
    };
});

app.directive("profilenfo", function() {
    return {
        restrict : "E",
        template : '<div class="form-group"><label for="social">Facebook URL</label><input type="text" class="form-control" name="fburl" ng-model="formData.fburl"></div><label>Favorite game?</label><div class="form-group"><div class="radio"><label><input type="radio" ng-model="formData.type" value="football" checked>I like Football</label></div><div class="radio"><label><input type="radio" ng-model="formData.type" value="chess">I like Chess</label></div><div class="radio"><label><input type="radio" ng-model="formData.type" value="hockey">I like Hockey</label></div></div><div class="form-group row"><div class="col-xs-6 col-xs-offset-3"><a ui-sref="form.payment" class="btn btn-block btn-info">Payment<span class="glyphicon glyphicon-circle-arrow-right"></span></a></div></div>'
    };
});

app.directive("paymentinfo", function() {
    return {
        restrict : "AE",
        template : '<div class="text-center"><span class="glyphicon glyphicon-heart"></span><h3>Please have Credit card and Adhar ready! ModiJI will collect money via Bheam aap</h3><button type="submit" class="btn btn-danger">Submit</button></div>'
    };
});

