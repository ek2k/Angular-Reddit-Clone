var app = angular.module("redditApp", []);

app.controller('UserPosts', function($scope){
  $scope.postList = [];
  $scope.post = {};
  $scope.addPost = function(){
    var newPost = {};
    newPost.author = $scope.post.author;
    newPost.title = $scope.post.title;
    newPost.description = $scope.post.description;
    newPost.img = $scope.post.img;
    newPost.time = $scope.post.time;

    $scope.postList.push(newPost);
  }
  // $scope.postList = [{
  //   author: "Ed",
  //   title: "Seattle",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   img:"http://ipadwallpapergallery.com/uploads/ttstam-space-needle-ipad-wallpaper-500x500.jpg",
  //   time: moment().calendar()
  // }]
})
