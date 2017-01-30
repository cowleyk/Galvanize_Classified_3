(function() {
  'use strict';

  angular.module('app')
  .component('classAdd', {
    controller: classAddController,
    templateUrl: '/classAdd/classAdd.component.html'
  });

  classAddController.$inject = ['$http', '$stateParams', '$state'];

  function classAddController($http, $stateParams, $state){
    const vm = this;
    console.log('classAddController');

    vm.classAdd = function(classified){
      $http.post('/classifieds', classified).then((result)=>{
        console.log('classAdd post-', result);
        $state.go('app');
      });
    };

  }

})();
