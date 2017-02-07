export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('books', {
      url: '/',
      component: 'books'
    })
    .state('book', {
      url: '/:id',
      component: 'book'
    })
}
