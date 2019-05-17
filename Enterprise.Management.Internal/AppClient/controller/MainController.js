angular
    .module('app.mainController', [])
    .controller('mainController', mainController)

mainController.$inject = ['$scope'];

function mainController($scope) {

    var mc = this;
    mc.title = 'Home';
    mc.menuSuperior = 'AppClient/templates/menu.html';

}