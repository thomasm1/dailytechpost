(function() {

    angular.module('app')
        .factory('dataService', ['$q', '$timeout', '$http', 'constants', '$cacheFactory', dataService]);


    function dataService($q, $timeout, $http, constants, $cacheFactory) {

        return {
            getAllBlogs: getAllBlogs,
            getAllReaders: getAllReaders,
            getBlogByID: getBlogByID,
            updateBlog: updateBlog,
            addBlog: addBlog,
            deleteBlog: deleteBlog,
            getUserSummary: getUserSummary
        };

        function getUserSummary() {

            var deferred = $q.defer();

            var dataCache = $cacheFactory.get('blogLoggerCache');

            if (!dataCache) {
                dataCache = $cacheFactory('blogLoggerCache');
            }

            var summaryFromCache = dataCache.get('summary');

            if (summaryFromCache) {

                //console.log('returning summary from cache');
                deferred.resolve(summaryFromCache);

            } else {

                //console.log('gathering new summary data');

                var blogsPromise = getAllBlogs();
                var readersPromise = getAllReaders();

                $q.all([blogsPromise, readersPromise])
                    .then(function (blogLoggerData) {

                        var allBlogs = blogLoggerData[0];
                        var allReaders = blogLoggerData[1];

                        var grandTotalMinutes = 0;

                        allReaders.forEach(function (currentReader, index, array) {
                            grandTotalMinutes += currentReader.totalMinutesRead;
                        });

                        var summaryData = {
                            blogCount: allBlogs.length,
                            readerCount: allReaders.length,
                            grandTotalMinutes: grandTotalMinutes
                        };

                        dataCache.put('summary', summaryData);
                        deferred.resolve(summaryData);

                    });

            }

            return deferred.promise;

        }

        function deleteSummaryFromCache() {

            var dataCache = $cacheFactory.get('blogLoggerCache');
            dataCache.remove('summary');

        }
        function getExample() {
            return $http({
                method: 'GET',
                url: `https://my-json-server.typicode.com/typicode/demo/posts`,
                // headers: {

                // },
            }).then(function successCallback(response) {
                console.log(response);
            }, function errorCallBack(error) {
                console.log(error)
            })
        }
        function getOnePost(id) {
            
             id = 'c208bd6d-fcdb-4a69-aa07-a90ea54f1c47';
             return $http({
                method: 'GET',
                url: `https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/dev/post/${id}?Content-Type=Application/JSON`,
                headers: {
                    'Content-Type': 'application/json'
                },
                transformResponse: transformGetBlogs,
                cache: true
            }).then(function successCallback(response) {
                $scope.post = response.data;
                console.log($scope.post);
            }, function errorCallback(response) {
                console.log($scope.post);
            })
        }
        function getAllBlogPosts() {

            return $http({
                method: 'GET',
                url: 'https://emfm9dpoeh.execute-api.us-east-1.amazonaws.com/dev/post',
                headers: {
                    'Content-Type': 'application/json'
                },
                transformResponse: transformGetBlogs,
                cache: true
            }).then(function successCallback(response) {
                $scope.posts = response.data;
                console.log($scope.posts);
            }, function errorCallback(response) {
                console.log($scope.posts);
            })
            // .then(sendResponseData)
            // .catch(sendGetBlogsError)

        }
        function getAllBlogs() {

            return $http({
                method: 'GET',
                url: 'api/blogs',
                headers: {
                    'PS-BlogLogger-Version': constants.APP_VERSION
                },
                transformResponse: transformGetBlogs,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetBlogsError)

        }

        function deleteAllBlogsResponseFromCache() {

            var httpCache = $cacheFactory.get('$http');
            httpCache.remove('api/blogs');

        }


        function transformGetBlogs(data, headersGetter) {

            var transformed = angular.fromJson(data);

            transformed.forEach(function (currentValue, index, array) {
                currentValue.dateDownloaded = new Date();
            });

            //console.log(transformed);
            return transformed;

        }

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetBlogsError(response) {

            return $q.reject('Error retrieving blog(s). (HTTP status: ' + response.status + ')');

        }

        function getBlogByID(blogID) {

            return $http.get('api/blogs/' + blogID)
            .then(sendResponseData)
            .catch(sendGetBlogsError);

        }

        function updateBlog(blog) {

            deleteSummaryFromCache();
            deleteAllBlogsResponseFromCache();

            return $http({
                method: 'PUT',
                url: 'api/blogs/' + blog.id,
                data: blog
            })
            .then(updateBlogSuccess)
            .catch(updateBlogError);

        }

        function updateBlogSuccess(response) {

            return 'Blog updated: ' + response.config.data.title;

        }

        function updateBlogError(response) {

            return $q.reject('Error updating blog.(HTTP status: ' + response.status + ')');

        }

        function addBlog(newBlog) {

            deleteSummaryFromCache();
            deleteAllBlogsResponseFromCache();

            return $http.post('api/blogs', newBlog, {
                transformRequest: transformPostRequest
            })
            .then(addBlogSuccess)
            .catch(addBlogError);
        }

        function transformPostRequest(data, headersGetter) {

            data.newBlog = true;

            console.log(data);

            return JSON.stringify(data);
        }

        function addBlogSuccess(response) {

            return 'Blog added: ' + response.config.data.title;

        }

        function addBlogError(response) {

            return $q.reject('Error adding blog. (HTTP status: ' + response.status + ')');

        }

        function deleteBlog(blogID) {

            deleteSummaryFromCache();
            deleteAllBlogsResponseFromCache();

            return $http({
                method: 'DELETE',
                url: 'api/blogs/' + blogID
            })
                .then(deleteBlogSuccess)
                .catch(deleteBlogError);

        }

        function deleteBlogSuccess(response) {

            return 'Blog deleted.';

        }

        function deleteBlogError(response) {

            return $q.reject('Error deleting blog. (HTTP status: ' + response.status + ')');

        }

        function getAllReaders() {

            var readersArray = [
                {
                    reader_id: 1,
                    name: 'Marie',
                    weeklyReadingGoal: 315,
                    totalMinutesRead: 5600
                },
                {
                    reader_id: 2,
                    name: 'Daniel',
                    weeklyReadingGoal: 210,
                    totalMinutesRead: 3000
                },
                {
                    reader_id: 3,
                    name: 'Lanier',
                    weeklyReadingGoal: 140,
                    totalMinutesRead: 600
                }
            ];

            var deferred = $q.defer();

            $timeout(function() {

                deferred.resolve(readersArray);

            }, 1500);

            return deferred.promise;
        }
    }

}());