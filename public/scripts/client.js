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
            vm.photos = res.data; //res is whole response, data is array
            console.log('vm.photos:', vm.photos);
        }); // end then
    }; //end Get
    vm.getPhotos();

    vm.toggle = function (photo) {
        photo.see = !photo.see;
        console.log(photo.see);
    };
    vm.postYes = function(req, req) {
        $http({
            method: ''
        })
    }
});// end PC


//dev's Toggle   
//vm.toggleMe = function(index) {
  //          console.log('toggle?', index)
    //        vm.photos[index].show = 