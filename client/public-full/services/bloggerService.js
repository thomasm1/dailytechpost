(function() {

    angular.module('app')
        .service('blogger', BlogAppLogger);

    function BloggerBase() { }

    BloggerBase.prototype.output = function(message) {
        console.log('BloggerBase: ' + message);
    };

    function BlogAppLogger() {

        BloggerBase.call(this);

        this.blogBook = function(blog) {
            console.log('Blog: ' + blog.title);
        }
    } 
 
    BlogAppLogger.prototype = Object.create(BloggerBase.prototype);

}());