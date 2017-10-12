app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state("login", {
            url: "/login",
            templateUrl: '../view/login.html'
        })

        .state("register", {
            url: "/register",
            templateUrl: '../view/registration.html'
        })

        .state("header", {
            url: "/header",
            templateUrl: '../view/header.html'
        })


        .state("dashboard" , {
			url : "/dashboard",
			views : {
				
                "dashboard@header" : {
                    templateUrl : "../view/header.html"
                },
                "dashboard@footer" : {
                    templateUrl : "../view/footer.html"
                },
                "dashboard@nav-bar" : {
                    templateUrl : "../view/nav-bar.html"
                }
			}


		})



    $urlRouterProvider.otherwise('/login');

}]);