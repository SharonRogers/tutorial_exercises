angular.module("app", []);

angular.module("app").controller("mainCtrl", function($scope) {
	$scope.user = {
		name: "Mihir Patel",
		address: {
			street: "PO BOX 123",
			city: "Provo",
			planet: "Earth"
		},
		friends: [
			"Han",
			"Leia",
			"Chewbacca"
		]

	}
});

angular.module("app").directive("userInfoCard", function() {
	return {
		restrict: "E",
		templateUrl: "userInfoCard.html"
	}
})