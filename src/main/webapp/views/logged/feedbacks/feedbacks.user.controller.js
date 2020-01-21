app.controller('FeedbacksUserController', [
  '$scope',
  FeedbacksUserController,
]);

function FeedbacksUserController ($scope) {

  $scope.state = {
    feedback: {
      positivo: 45,
      melhoria: 2,
      especial: 15,
      total: 62,
      feedbacks: [
        {
          id: 1,
          tipo: 1,
          title: 'Favorável',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita totam harum beatae atque iure, aliquid facere omnis provident quo inventore in quaerat accusantium reiciendis qui, consectetur quos quidem dolorem!',
          date: '16/12/2019',
          recebido: {
            name: '7Orea'
          },
          autor: {
            name: 'Uellington'
          }
        },
        {
          id: 2,
          tipo: 2,
          title: 'Melhoria',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta expedita totam harum beatae atque iure, aliquid facere omnis provident quo inventore in quaerat accusantium reiciendis qui, consectetur quos quidem dolorem!',
          date: '16/12/2019',
          recebido: {
            name: '7Orea'
          },
          autor: {
            name: 'Uellington'
          }
        }
      ]
    },
  };

  $scope.getClass = function (id) {
    switch (id) {
      case 1:
        return 'text-success'

      case 2:
        return 'text-danger'
        
      case 3:
        return 'text-warning'
    }
  }

  $scope.geIcon = function (id) {
    switch (id) {
      case 1:
        return 'thumb_up'

      case 2:
        return 'eco'
        
      case 3:
        return 'stars'
    }
  }
}