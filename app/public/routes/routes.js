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

        .state("footer", {
            url: "/footer",
            templateUrl: '../view/footer.html'
        })

        .state("dashboard", {
            url: "/dashboard",
            views : {
                "header" : {
                    templateUrl : "../view/footer.html" 
                }
            }
        })

        .state("dashboard.header", {
            url: "/dashboard/header",
            templateUrl: '../view/header.html'
        })

        .state("dashboard1" , {
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