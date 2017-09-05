angular.module('quoteBook').controller('quoteBookCtrl', function($scope, quoteService){
  $scope.quotes = quoteService.quotes;
  $scope.addQuote = function(obj) {
    quoteService.addQuote(obj);
  }
  $scope.removeQuote = function(i){
    quoteService.removeQuote(i);
  };
});
