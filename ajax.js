
var myApp =  angular.module('PromiseApp', []);
 
//Bir Controller Tanımlıyoruz.
//$scope ve PromiseServis adında DI'ye kayıt ediyoruz.
myApp.controller('SimpleController', [
      '$scope', 'PromiseServis ',
        function($scope, PromiseServis ) {
          $scope.pullRequests =PromiseServis.getInfo(); }]); 
 
//Low-level AJAX Etkileşimi için $http servis oluşturuyoruz. 
//$q promise oluşturmak için kullandığımız Angular Yapısal Servisidir.
 myApp.factory('PromiseServis', [ '$q', '$http',
 function($q, $http)
 var getInfo= function() { 
var deferred = $q.defer();
 // Get Objects from api.mehmetcanker.com 
$http.get('https://api.mehmetcanker.com/services')
 
 .success(function(data) {
 deferred.resolve(data); })
 
.error(function(reason) {
 deferred.reject(reason); })
 
 return deferred.promise; } 
return { getInfo: getInfo }; }]);