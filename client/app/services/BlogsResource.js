(function () {

    angular.module('app')
        .factory('BlogsResource', ['$resource', BlogsResource]);

    function BlogsResource($resource) {

        return $resource('/api/blogs/:id', {id: '@id'},
            {
                'update': {method: 'PUT'}
            }
        );
    }

}());