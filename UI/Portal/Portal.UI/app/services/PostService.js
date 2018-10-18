(function () {

	var PostSvc = function () {

		getMostRecentPost = function (postType) {
			//console.log(postType);
			return [{ Name: "Java Script", Discription: "Java Script...." },
			{ Name: "Jquery", Discription: "Jquery..." }];
		}

		getPost = function () {
			return [{ Title: "Java Script", Discription: "Java Script....", Tags: [{}], DateTime: new Date(), Author: "Gaurav",Rank:1 },
				{ Title: "Angular", Discription: "Angular", Tags: [{}], DateTime: new Date(), Author: "Piyush",Rank:2 }];
		}

		return {
			GetMostRecentPost: getMostRecentPost,
			GetPost: getPost
		}

	}

	app.service("PostService", PostSvc);

})()