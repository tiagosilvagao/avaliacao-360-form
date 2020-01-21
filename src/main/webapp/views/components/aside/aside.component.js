app
  .component('asideComp', {
    controller: 'AsideController',
    templateUrl: 'views/components/aside/aside.component.html',
    transclude: true,
    bindings: {
      props: '<'
    }
  });