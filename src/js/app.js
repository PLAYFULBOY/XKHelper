'use strict';
var starkAPP = angular.module('starkAPP', [
        'ngRoute',
        'ngAnimate',
        'routeStyles',
        'baseService'
    ])
    .config(['$compileProvider', '$routeProvider', '$locationProvider',
        function($compileProvider, $routeProvider, $locationProvider) {
            $routeProvider
                .when('/main/', {
                    templateUrl: './html/main.html'
                })
                .when('/all/', {
                    templateUrl: './html/all.html'
                })
                .otherwise({
                    redirectTo: '/main/'
                });
        }
    ]);
