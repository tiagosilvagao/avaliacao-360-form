app.controller('DashboardController', [
  '$scope',
  '$state',
  DashboardController
]);

function DashboardController ($scope, $state) {
  const ctrl = this;

  $scope.state = {
    sidebar: {
      userName: "Uellington Palma",
      cargo: 'Administrador',
      role: 1
    },
    feedbacks: {
      positivo: 45,
      melhoria: 2,
      especial: 15,
      total: 62
    },
    evaluations: [
      {
        title: 'Avaliação de Pares',
        dataInicial: '16/12/2019',
        dataFinal: '20/01/2020'
      },
      {
        title: 'Avaliação de Líderes',
        dataInicial: '16/12/2019',
        dataFinal: '20/01/2020'
      }
    ],
    users: [
      {
        id: 1, 
        name: 'Uellington Palma',
        time: 'Fábrica',
        funcao: 'Front End'
      },
      {
        id: 2,
        name: 'Felipe',
        time: 'Fábrica',
        funcao: 'Teste'
      },
      {
        id: 3,
        name: 'Tiago',
        time: 'Fábrica',
        funcao: 'Front End'
      }
    ],
    organization: []
  };
  
}
