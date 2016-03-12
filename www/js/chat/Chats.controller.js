﻿(function () {
    'use strict';

    angular
        .module('Chats')
        .controller('ChatsCtrl', ChatsCtrl);

    ChatsCtrl.$inject = ['$scope', 'Chats'];

    function ChatsCtrl($scope, Chats) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Chats';

        activate();

        function activate() {
            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            $scope.chats = Chats.all();
            $scope.remove = function (chat) {
                Chats.remove(chat);
            };
        }
    }
})();
