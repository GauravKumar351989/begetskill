(function () {

	var ServiceCtrl = function ($scope, FacilityService) {
		var scope = $scope
		this.scope = scope;

		this.scope.Title = "Service Title";
		this.scope.ServiceList = [];

		this.scope.getServiceList = function () {
			scope.ServiceList =FacilityService.GetServiceList();
		}
	}

	app.controller("ServiceController", ["$scope", "FacilityService", ServiceCtrl]);
})()