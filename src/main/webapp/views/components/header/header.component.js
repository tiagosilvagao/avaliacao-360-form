app
  .component('headerComp', {
    controller: 'HeaderController',
    templateUrl: 'views/components/header/header.component.html',
    bindings: {
      onAction: '&'
    }
  });