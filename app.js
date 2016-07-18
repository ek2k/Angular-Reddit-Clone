var app = angular.module("redditApp", []);

app.controller('UserPosts', function($scope, orderByFilter){
  $scope.postList = [];
  $scope.post = {};
  $scope.sort = ['Vote', 'Date', 'Title'];
  $scope.addPost = function(){
    $scope.post.vote = 0;
    $scope.post.time = moment().calendar();
    var newPost = {};
    newPost.author = $scope.post.author;
    newPost.title = $scope.post.title;
    newPost.description = $scope.post.description;
    newPost.img = $scope.post.img;
    newPost.time = $scope.post.time;
    newPost.vote = $scope.post.vote;
    $scope.postList.push(newPost);
    $scope.postList = orderByFilter($scope.postList, $scope.post.vote);
  }

  $scope.thumbsUp = function(){
    this.post.vote++;
  }

  $scope.thumbsDown = function(){
    this.post.vote--;
  }

  $scope.sortVal = function(val){
    $scope.filter = val;
    $scope.postList = orderByFilter($scope.postList, $scope.post.vote);
  }


  // $scope.postList = [{
  //   author: "Ed",
  //   title: "Seattle",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   img:"http://ipadwallpapergallery.com/uploads/ttstam-space-needle-ipad-wallpaper-500x500.jpg",
  //   time: moment().calendar()
  // }]
})
