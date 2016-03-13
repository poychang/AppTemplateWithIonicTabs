(function () {
    'use strict';

    angular
        .module('starter.controllers', ['Dash', 'Chats', 'Account'])
        .controller('Controller', Controller)

    Controller.$inject = [];
    function Controller() {
        /* jshint validthis:true */
        var vm = this;
    }
})();