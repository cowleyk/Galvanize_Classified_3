(function() {
  'use strict';

  angular.module('app').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'app',
        url: '/',
        component: 'app'
      })
      .state({
        name: 'classEdit',
        url: '/classEdit',
        component: 'classEdit',
        params: {
          classified: {title:'default', description:'default', item_image:'default'}
        }
      })
      .state({
        name: 'classAdd',
        url: '/classAdd',
        component: 'classAdd'
      });
  }

}());
