'use strict';

angular.
  module('core.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('posts/:postId.json', {}, {
        query: {
          method: 'GET',
          params: {postId: 'posts'},
          isArray: true
        }
      });
    }
  ]);
