var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/fibo');

    $stateProvider
        .state('fibo', {
            url: '/fibo',
            templateUrl: 'template/fiboTemplate.html',
            controller : 'fiboCtrl'
        })
        .state('prime', {
            url: '/prime',
            templateUrl: 'template/primeTemplate.html',
            controller: 'primeCtrl'       
        })
        .state('palin', {
            url: '/palin',
            templateUrl: 'template/palinTemplate.html',
            controller: 'palinCtrl'       
        })
});

routerApp.controller('fiboCtrl',function($scope, $http){
   var str='';
    $scope.check=function(){
     var value=$scope.fibo;
        fibonacciRecursive(0, 1, 1, value);
       $scope.message=str;
       $scope.fibo="";
    }
    function fibonacciRecursive(a, b, counter, len) {
    if (counter <= len) {
         str=str+"  "+a;
        fibonacciRecursive(b, a + b, counter + 1, len);
        }
    }
});

routerApp.controller('primeCtrl',function($scope, $http){
    $scope.check=function(){
     var value=$scope.prime;
        if(isPrime(value))
         $scope.message=value+" is a prime number";
        else
         $scope.message=value+" Not prime number"; 

       $scope.prime='';
    }
    
     function isPrime(number) {
     if (typeof number !== 'number' || !Number.isInteger(number)) {
      return false;
     }
      if (number < 2) {
        return false;
      }

      if (number === 2) {
        return true;
      } else if (number % 2 === 0) {
        return false;
      }
       for (var i = 3; i*i <= number; i += 2) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
});

routerApp.controller('palinCtrl',function($scope, $http){

      $scope.check=function(){
            
      $http({
          url: 'http://www.mpbits.com/palindrome.php',
          method: 'POST',
          data: {"string":$scope.palin}, // Make sure to inject the service you choose to the controller
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
            }
      }).success(function(response) { 
       alert('fjjh');
       $scope.message=response;/* do something here */ 
     });

   }
     
    

})