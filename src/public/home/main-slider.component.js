(function () {
"use strict";

angular.module('public')
.component('mainSlider', {
  templateUrl: 'src/public/home/templates/mainslider.template.html',
  bindings: {
    items: '<'
  },
  controller: "youtubeController",
  controllerAs: "youtube"
});

})();