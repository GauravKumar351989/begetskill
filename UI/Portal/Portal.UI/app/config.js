app.config(function ($stateProvider) {

	var urlState = [{
		name: 'default',
		url: '/',
		templateUrl: '../views/postlist.html'
	}, {
		name: 'services',
		url: '/services',
		templateUrl: '../views/service.html',
		controller:"ServiceController"
	}, {
		name: 'contact',
		url: '/contact',
		templateUrl: '../views/contact.html'
	}, {
		name: 'project',
		url: '/project',
		templateUrl: '../views/postlist.html'
	}, {
		name: 'about',
		url: '/about',
		templateUrl: '../views/about.html'
	}];

	//register state
	for (var i = 0; i < urlState.length; i++) {
		$stateProvider.state(urlState[i]);
	}

});