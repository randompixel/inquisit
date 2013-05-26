/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('portfolio',[]).
        config(function($routeProvider) {
            $routeProvider.
                when('/', {templateUrl: 'home.html'}).
                when('/portfolio', {controller: PortfolioCtrl, templateUrl: 'portfolio.html'}).
                otherwise({redirectTo:'/'})
        });

function PortfolioCtrl($scope, $http) {
    $http.get('data/portfolio.json').success(function(data) {
       $scope.portfolio = data; 
    });
}