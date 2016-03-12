(function () {
    'use strict';

    angular
        .module('Dash')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = ['$scope'];

    function DashCtrl($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Dash';

        activate();

        function activate() { }
    }
})();
