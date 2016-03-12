(function () {
    'use strict';

    angular
        .module('Chats')
        .controller('ChatDetailCtrl', ChatDetailCtrl);

    ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

    function ChatDetailCtrl($scope, $stateParams, Chats) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'ChatDetail';

        activate();

        function activate() {
            $scope.chat = Chats.get($stateParams.chatId);
        }
    }
})();
