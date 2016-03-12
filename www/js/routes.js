﻿(function () {
    'use strict';

    angular
        .module('starter.routes', [])
        .config(function ($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

            // setup an abstract state for the tabs directive
              .state('tab', {
                  url: '/tab',
                  abstract: true,
                  templateUrl: 'templates/tabs.html'
              })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/dash/dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chats/chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
              .state('tab.chat-detail', {
                  url: '/chats/:chatId',
                  views: {
                      'tab-chats': {
                          templateUrl: 'templates/chats/chatdetail.html',
                          controller: 'ChatDetailCtrl'
                      }
                  }
              })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/account/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/dash');

        });
})();
