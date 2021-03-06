angular.module("app", []);

angular.module("app").controller("mainCtrl", function($scope) {
	$scope.user1 = {
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
	$scope.user2 = {
		name: "Justin Smith",
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
	// console.log($scope);
	
});

angular.module("app").directive("userInfoCard", function() {
	return {
		restrict: "E",
		scope:  {
			user: "="
		},
		templateUrl: "userInfoCard.html",
		controller: function($scope) {
			$scope.knightMe = function(user) {
			user.rank = "knight";
			}
			// console.log($scope);
		}
	}
});