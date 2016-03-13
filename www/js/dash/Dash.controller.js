(function () {
    'use strict';

    angular
        .module('Dash')
        .controller('DashCtrl', DashCtrl);

    DashCtrl.$inject = [];

    function DashCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Dash';

        activate();

        function activate() { }
    }
})();
