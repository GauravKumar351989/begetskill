(function () {

	var PostViews = function () {

		return {
			restrict: 'E',
			controller: 'PostController',
			scope: {

			},
			templateUrl: '../views/post.html',
			link: function (scopeCtrl, element, attrs) {
			}
		}

	}

	app.directive("postView", PostViews);

})()