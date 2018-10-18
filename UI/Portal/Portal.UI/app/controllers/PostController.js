(function () {

	var PostCtrl = function ($scope, PostService) {
		var scope = $scope;
		this.scope = scope;

		this.scope.postList = [];
		this.scope.postType = "";

		this.scope.getPostList = function () {
			scope.postList = PostService.GetPost();
		}

		this.scope.GetRecentPost = function () {
			scope.postList = [{ name: "Java Script ECMA", Discription: "java script ECMA..." },
			{ name: "Jquery", Discription: "Jquery..." }];
			PostService.GetMostRecentPost(scope.postType);
		}

	}

	app.controller("PostController", ["$scope", "PostService", PostCtrl]);
})()