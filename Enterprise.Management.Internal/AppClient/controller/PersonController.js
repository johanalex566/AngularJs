angular
    .module('app.PersonController', [ ])
    .controller('PersonController', PersonController)

PersonController.$inject = ['$scope'];

function PersonController($scope) {

    var pc = this;
    pc.title = "Person manager";
}
