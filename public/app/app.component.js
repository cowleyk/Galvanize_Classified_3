(function() {
  'use strict';

  angular.module('app')
  .component('app', {
    controller: homeController,
    templateUrl: '/app/app.component.html'
  });

  homeController.$inject = ['$http', '$state'];

  function homeController($http, $state){
    const vm = this;
    console.log('homeController');

    vm.$onInit = function(){
      $http.get('/classifieds').then((result)=>{
        // console.log(result);
        vm.classifieds = result.data;
      });
    };

    vm.createClass = function(){
      $state.go("classAdd", {});
    };
    vm.editClass = function(classified){
      $state.go("classEdit", {classified: classified});
    };
    vm.deleteClass = function(classified){
      event.preventDefault();
      $http.delete(`/classifieds/${classified.id}`).then((result)=>{
        console.log(result);
        for (var i = 0; i < vm.classifieds.length; i++) {
          if(result['data']['id'] === vm.classifieds[i]['id']){
            console.log('if statement!!');
            vm.classifieds.splice(i, 1);
          }
        }
      })
    }
  }

})();
