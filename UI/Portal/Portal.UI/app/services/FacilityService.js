(function () {
	var FacilitySvc = function () {

		var getServiceList = function () {

			return ["Assignments", "Consulting", "Development", "Training"];
		}

		return {
			GetServiceList: getServiceList
		}

	}

	app.service("FacilityService", FacilitySvc);
})()