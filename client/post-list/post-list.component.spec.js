'use strict';

describe('postList', function() {

  // Load the module that contains the `postList` component before each test
  beforeEach(module('postList'));

  // Test the controller
  describe('PhoneListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('posts/posts.json')
                  .respond([{title: 'Nexus S'}, {title: 'Motorola DROID'}]);

      ctrl = $componentController('postList');
    }));

    it('should create a `posts` property with 2 posts fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.posts).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.posts).toEqual([{title: 'Nexus S'}, {title: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('cat3');
    });

  });

});
