'use strict';

// Register `postList` component, along with its associated controller and template
angular.
  module('postList').
  component('postList', {
    templateUrl: 'post-list/post-list.template.html',
    controller: ['Post',
      function postListController(Post) {
        this.posts = Post.query();
        this.orderProp = 'cat3';
      }
    ]
  });
