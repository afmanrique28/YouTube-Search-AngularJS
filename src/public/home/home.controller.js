(function () {
    'use strict';

    angular.module('ideaware')
        .controller('footerController', footerController)
        .controller('youtubeController', youtubeController)
        .constant('ApiBasePath', 'https://www.googleapis.com/youtube/v3/search');

    // Controller for youtube app
    youtubeController.$inject = ['$scope', '$http', '$filter', 'ApiBasePath'];
    function youtubeController($scope, $http, $filter, ApiBasePath) {

        $scope.youtubeData = [];
        $scope.nextPage = "";
        $scope.youtubeSearchText = "";
        $scope.getYoutubeData = function (searchText) {
            $http.get(ApiBasePath , {
                params: {
                    key: "AIzaSyCEY8RaIcAHfCi1oU7TFKu3Z-lWfSnS624",
                    type: 'video',
                    maxResults: '10',
                    pageToken: $scope.nextPage ? $scope.nextPage : '',
                    part: 'id,snippet',
                    fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails,items/snippet/channelTitle,nextPageToken,prevPageToken',
                    q: searchText
                }
            }).success(function (data) {
                if (data.items.length === 0) {
                    $scope.youtubeData = 'No results were found!';
                }
                $scope.youtubeSearchText = searchText;
                $scope.youtubeData = data.items;
                $scope.nextPageToken = data.nextPageToken;
                $scope.prevPageToken = data.prevPageToken;
            });
        };

        $scope.checkDataLength = function (data) {
            return (data.length >= 1);
        };

        $scope.callNextPageFn = function (nextPage) {
            $scope.nextPage = nextPage;
            $scope.getYoutubeData($scope.youtubeSearchText);
        };
    }

    //Footer Controller social media
    footerController.$inject = ['$scope'];
    function footerController($scope) {

    }

})();
