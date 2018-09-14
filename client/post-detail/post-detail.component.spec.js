'use strict';

describe('postDetail', function() {

  // Load the module that contains the `postDetail` component before each test
  beforeEach(module('postDetail'));

  // Test the controller
  describe('PostDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPostData = {
      title: 'post xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('posts/xyz.json').respond(xyzPostData);

      $routeParams.postId = 'xyz';

      ctrl = $componentController('postDetail');
    }));

    it('should fetch the post details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.post).toEqual({});

      $httpBackend.flush();
      expect(ctrl.post).toEqual(xyzPostData);
    });

  });

});
