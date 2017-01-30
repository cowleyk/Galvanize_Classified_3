(function() {
  'use strict';

  angular.module('app')
  .component('classEdit', {
    controller: classEditController,
    templateUrl: '/classEdit/classEdit.component.html'
  });

  classEditController.$inject = ['$http', '$stateParams', '$state'];

  function classEditController($http, $stateParams, $state){
    const vm = this;
    console.log('classEditController');

    vm.$onInit = function(){
      vm.classified = $stateParams.classified;
    }


    vm.classEdit = function(classified){
      console.log(classified);
      $http.patch(`/classifieds/${classified.id}`, classified).then((result)=>{
        console.log('patch result-', result);
        $state.go('app');
      });
    };

  }

})();
