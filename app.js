var app = angular.module("redditApp", []);

app.controller('UserPosts', function($scope, orderByFilter){
  $scope.view = {};
  $scope.view.postList = [];
  $scope.view.post = {};
  $scope.view.commentList = [];
  $scope.view.comment = {};
  $scope.view.filter = 'Vote';
  $scope.view.sort = ['Vote', 'Date', 'Title'];
  $scope.view.value = '-vote';
  $scope.addPost = function(){
    $scope.view.post.vote = 0;
    $scope.view.post.date = moment().calendar();
    var newPost = {};
    newPost.author = $scope.view.post.author;
    newPost.title = $scope.view.post.title;
    newPost.description = $scope.view.post.description;
    newPost.img = $scope.view.post.img;
    newPost.date = $scope.view.post.date;
    newPost.vote = $scope.view.post.vote;
    $scope.view.postList.push(newPost);
  }

  $scope.thumbsUp = function(){
    this.post.vote++;
  }

  $scope.thumbsDown = function(){
    this.post.vote--;
  }

  $scope.sortVal = function(val){
    if(val === 'Vote'){
      $scope.view.value = '-vote';
      $scope.view.filter = 'Vote';
    }else if (val === 'Date') {
      $scope.view.value = '-date';
      $scope.view.filter = 'Date';
    }else if (val === 'Title') {
      $scope.view.value = 'title';
      $scope.view.filter = 'Title';
    }
  };

  $scope.addComment = function(){
    var newComment = {};
    newComment.author = $scope.comment.author;
    newComment.comment = $scope.comment.comment;
    $scope.commentList.push(newComment);
  }

  // $scope.postList = [{
  //   author: "Ed",
  //   title: "Seattle",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   img:"http://ipadwallpapergallery.com/uploads/ttstam-space-needle-ipad-wallpaper-500x500.jpg",
  //   time: moment().calendar()
  // }]
})
