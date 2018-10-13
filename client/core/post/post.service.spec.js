'use strict';

describe('Post', function() {
  var $httpBackend;
  var Post;
  var postsData = [
    {name: 'Post X'},
    {name: 'Post Y'},
    {name: 'Post Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Post` service before each test
  beforeEach(module('core.post'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Post_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('posts/posts.json').respond(postsData);

    Post = _Post_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the posts data from `/posts/posts.json`', function() {
    var posts = Post.query();

    expect(posts).toEqual([]);

    $httpBackend.flush();
    expect(posts).toEqual(postsData);
  });

});
