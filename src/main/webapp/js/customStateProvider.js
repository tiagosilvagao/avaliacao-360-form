/*
To add your route in the angular, uncomment the code and use this structure
*/
window.customStateProvider = function($stateProvider) {
  $stateProvider

    // Painel /////////////////////////////////////////////

    .state('login', {
      url: "",
      controller: 'LoginController',
      templateUrl: 'views/login.view.html'
    })

    .state('home', {
      url: "/painel",
      controller: 'HomeController',
      templateUrl: 'views/logged/index.view.html',
      resolve : {
        redirect: function($state) {
          $state.go('home.inicio', {}, {reload: true});
        }
      }
    })

    .state('home.inicio', {
      url: "/inicio",
      controller: 'HomeController',
      templateUrl: 'views/logged/home/home.view.html'
    })

    .state('home.avaliacoes', {
      url: "/avaliacoes",
      controller: 'HomeController',
      templateUrl: 'views/logged/evaluation/evaluation.view.html'
    })

    .state('home.users', {
      url: "/colaboradores",
      controller: 'HomeController',
      templateUrl: 'views/logged/users/users.view.html'
    })

    .state('home.feedbacks', {
      url: "/feedbacks",
      controller: 'FeedbacksUserController',
      templateUrl: 'views/logged/feedbacks/feedbacks.view.html'
    })

    .state('home.settings', {
      url: "/configuracoes",
      abstract: true,
      controller: 'HomeController',
      templateUrl: 'views/logged/settings/settings.view.html'
    })

    .state('home.settings.dados', {
      url: "/meus-dados",
      controller: 'HomeController',
      templateUrl: 'views/logged/settings/meus_dados.view.html'
    })

    .state('home.settings.certificates', {
      url: "/certificacoes",
      controller: 'HomeController',
      templateUrl: 'views/logged/settings/certificates.view.html'
    })

    .state('home.settings.curriculum', {
      url: "/curriculo",
      controller: 'HomeController',
      templateUrl: 'views/logged/settings/meu_curriculo.view.html'
    })

    // Dashboard //////////////////////////////////////////

    .state('dashboard', {
      url: "/dashboard",
      abstract: true,
      controller: 'DashboardController',
      templateUrl: 'views/admin/index.view.html'
    })

    .state('dashboard.inicio', {
      url: "/inicio",
      controller: 'DashboardController',
      templateUrl: 'views/admin/home/home.view.html'
    })

    .state('dashboard.avaliacoes', {
      url: "/avaliacoes",
      abstract: true,
      controller: 'EvaluationController',
      template: '<ui-view></ui-view>'
    })

    .state('dashboard.avaliacoes.list', {
      url: "/lista",
      controller: 'EvaluationController',
      templateUrl: 'views/admin/evaluation/evaluation.view.html'
    })

    .state('dashboard.avaliacoes.reports', {
      url: "/relatorios/:evalId",
      controller: 'EvaluationController',
      templateUrl: 'views/admin/evaluation/reports.view.html'
    })

    .state('dashboard.avaliacoes.reports.user', {
      url: "/user/:userId",
      controller: 'EvaluationController',
      templateUrl: 'views/admin/evaluation/user_report.view.html'
    })


    .state('dashboard.feedbacks', {
      url: "/feedbacks",
      controller: 'FeedbacksController',
      templateUrl: 'views/admin/feedbacks/feedbacks.view.html'
    })

    .state('dashboard.forms', {
      url: "/formularios",
      abstract: true,
      controller: 'FormsController',
      templateUrl: 'views/admin/forms/forms.view.html'
    })

    .state('dashboard.forms.lists', {
      url: "/lista",
      controller: 'ListFormsController',
      templateUrl: 'views/admin/forms/lists.view.html'
    })

    .state('dashboard.forms.new', {
      url: "/novo",
      controller: 'NewsFormsController',
      templateUrl: 'views/admin/forms/new.view.html'
    })

    .state('dashboard.organization', {
      url: "/clima-organizacional",
      controller: 'OrganizationController',
      templateUrl: 'views/admin/organization/organization.view.html'
    })

    .state('dashboard.settings', {
      url: "/configuracoes",
      abstract: true,
      controller: 'SettingsController',
      templateUrl: 'views/admin/settings/settings.view.html'
    })

    .state('dashboard.settings.managers', {
      url: "/administradores",
      controller: 'SettingsController',
      templateUrl: 'views/admin/settings/managers.view.html'
    })

    .state('dashboard.settings.skills', {
      url: "/competencias",
      controller: 'SkillsController',
      templateUrl: 'views/admin/settings/skills.view.html'
    })

    .state('dashboard.settings.times', {
      url: "/times",
      controller: 'TimesController',
      templateUrl: 'views/admin/settings/times.view.html'
    })

    .state('dashboard.settings.functions', {
      url: "/funcoes",
      controller: 'FunctionsController',
      templateUrl: 'views/admin/settings/functions.view.html'
    })

    .state('dashboard.users', {
      url: "/colaboradores",
      abstract: true,
      template: '<ui-view></ui-view>'
    })

    .state('dashboard.users.times', {
      url: "/times",
      controller: 'UsersController',
      templateUrl: 'views/admin/users/users.view.html'
    })

    .state('dashboard.users.detail', {
      url: "/:userId",
      controller: 'UsersController',
      templateUrl: 'views/admin/users/detail.view.html'
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