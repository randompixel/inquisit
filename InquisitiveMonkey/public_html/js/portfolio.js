/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('portfolio',[]).
        config(function($routeProvider) {
            $routeProvider.
                when('/', {templateUrl: 'home.html'}).
                when('/portfolio', {templateUrl: 'portfolio.html'}).
                otherwise({redirectTo:'/'})
        });

