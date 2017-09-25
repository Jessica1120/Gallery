console.log('here?');

var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function($http) {
    console.log('PC');
    var vm = this;

    vm.photos = [];

    vm.getPhotos = function(req, res) {
        $http({
            method: 'GET',
            url:    '/photos'
        }).then(function(res){
            vm.photos = res.data;
            console.log('vm.photos:', vm.photos);
        }); // end then
    }; //end Get
    vm.getPhotos();
});// end PC