console.log('here?');

var myApp = angular.module('myApp', []);

myApp.controller('PhotoController', function($http) {
    console.log('PC');
    var vm = this;

    vm.getPhotos = function() {
        $http({
            method: 'GET',
            url:    '/photos'
        }).then(function(res){
            vm.photos = res.data; //res is whole response, data is array
            console.log('vm.photos:', vm.photos);
        }); // end then
    }; //end Get
    vm.getPhotos();

    vm.postYes = function(index) {
        console.log('postYes', index)
        $http({
            method: 'PUT',
            url: '/photos',
            data: {index: index}
        }).then(function(res) {
            console.log('put res', res)
            vm.getPhotos();
        })
    }   
    vm.postComment = function(comment, index) {
        var objtoSend = {
            comment: comment,
            index: index,
        }
        console.log('postComment', objtoSend)
        $http({
            method: 'POST',
            url: '/photos',
            data: objtoSend,
        }).then(function(res) {
            console.log('post res', res)
            vm.getPhotos();
        })
    }   

    
});// end PC


//dev's Toggle   
//vm.toggleMe = function(index) {
  //          console.log('toggle?', index)
    //        vm.photos[index].show = 