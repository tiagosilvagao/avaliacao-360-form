/*
To add your route in the angular, uncomment the code and use this structure
*/
window.customStateProvider = function($stateProvider) {
  $stateProvider

    // Painel
    .state('login', {
      url: "/",
      controller: 'LoginController',
      templateUrl: 'views/login.view.html'
    })

    .state('home', {
      url: "/painel",
      controller: 'HomeController',
      templateUrl: 'views/logged/home/home.view.html'
    })

    // Dashboard
    .state('dashboard', {
      url: "/dashboard",
      controller: 'DashboardController',
      templateUrl: 'views/admin/home/home.view.html'
    })

    .state('avaliacoes', {
      url: "/dashboard/avaliacoes",
      controller: 'EvaluationController',
      templateUrl: 'views/admin/evaluation/evaluation.view.html'
    })

    .state('feedbacks', {
      url: "/dashboard/feedbacks",
      controller: 'FeedbacksController',
      templateUrl: 'views/admin/feedbacks/feedbacks.view.html'
    })

    .state('forms', {
      url: "/dashboard/formularios",
      controller: 'FormsController',
      templateUrl: 'views/admin/forms/forms.view.html'
    })

    .state('organization', {
      url: "/dashboard/clima",
      controller: 'OrganizationController',
      templateUrl: 'views/admin/organization/organization.view.html'
    })

    .state('settings', {
      url: "/dashboard/configuracoes",
      controller: 'SettingsController',
      templateUrl: 'views/admin/settings/settings.view.html'
    })

    .state('users', {
      url: "/dashboard/colaboradores",
      controller: 'UsersController',
      templateUrl: 'views/admin/users/users.view.html'
    })






//     .state('socialError', {
//       url: "/notconnected",
//       controller: 'SocialController',
//       templateUrl: 'views/login.view.html'
//     })

//     .state('main', {
//       url: "/",
//       controller: 'LoginController',
//       templateUrl: 'views/login.view.html'
//     })

//     .state('publicRoot', {
//       url: "/public/{name:.*}",
//       controller: 'PageController',
//       templateUrl: function(urlattr) {
//         return 'views/public/' + urlattr.name + '.view.html';
//       }
//     })

//     .state('public', {
//       url: "/home/public",
//       controller: 'PublicController',
//       templateUrl: function(urlattr) {
//         return 'views/public/home.view.html';
//       }
//     })

//     .state('public.pages', {
//       url: "/{name:.*}",
//       controller: 'PageController',
//       templateUrl: function(urlattr) {
//         return 'views/public/' + urlattr.name + '.view.html';
//       }
//     })

//     .state('home', {
//       url: "/home",
//       controller: 'HomeController',
//       templateUrl: 'views/logged/home.view.html'
//     })

//     .state('home.pages', {
//       url: "/{name:.*}",
//       controller: 'PageController',
//       templateUrl: function(urlattr) {
//         return 'views/' + urlattr.name + '.view.html';
//       }
//     })

//     .state('404', {
//       url: "/error/404",
//       controller: 'PageController',
//       templateUrl: function(urlattr) {
//         return 'views/error/404.view.html';
//       }
//     })
//     .state('403', {
//       url: "/error/403",
//       controller: 'PageController',
//       templateUrl: function(urlattr) {
//         return 'views/error/403.view.html';
//       }
    // });
}