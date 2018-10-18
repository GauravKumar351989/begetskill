(function () {

	var AsidePostDir = function () {

		return {
			restrict: 'E',
			controller: "PostController",
			scope: {
				postType: '@'
			},
			templateUrl: '../views/asidepost.html',
			link: function (scopeCtrl, element, attrs) {
				scopeCtrl.postType = attrs.postType;
			}
		}

	}

	app.directive("asidePost", AsidePostDir);

})()