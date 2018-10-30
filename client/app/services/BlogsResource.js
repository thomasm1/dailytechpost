(function () {

    angular.module('app')
        .factory('BlogsResource', ['$resource', BlogsResource]);

    function BlogsResource($resource) {

        return $resource('/api/blogs/:blog_id', {blog_id: '@blog_id'},
            {
                'update': {method: 'PUT'}
            }
        );
    }

}());