(function () {
    'use strict';

    angular
        .module('Account')
        .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope'];

    function AccountCtrl($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Account';

        activate();

        function activate() {
            $scope.settings = {
                enableFriends: true
            };
        }
    }
})();
