(function () {
"use strict";

angular.module('public')
.directive("youtubeSearch",function(){
    return{
        templateUrl:"src/public/home/templates/youtubeSearch.template.html",
        link:function(scope,elem,attrs){
            console.log(scope);
        }
    }
});

})();