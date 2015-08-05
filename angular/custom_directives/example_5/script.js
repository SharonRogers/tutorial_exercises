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
			$scope.collapsed = false;
			$scope.knightMe = function(user) {
			user.rank = "knight";
			}
			$scope.collapse = function() {
				$scope.collapsed = !$scope.collapsed;
			}
			$scope.removeFriend = function(friend) {
				var idx = $scope.user.friends.indexOf(friend);
				if (idx > -1) {
					$scope.user.friends.splice(idx, 1);
				}
			}
			// console.log($scope);
		}
	}
});

angular.module("app").directive("address", function() {
	return {
		restrict: "E",
		templateUrl: "address.html",
		scope: true, //inherited scope
		//scope: {}, // isolated scope
		controller: function($scope) {
			$scope.collapsed = false; //same value as line 42
			// $scope.user = {}
			//console.log($scope) 
			//console.log($scope.user) bc it has access to parent
			$scope.collapseAddress = function() {
				$scope.collapsed = true;
			}
			$scope.expandAddress = function() {
				$scope.collapsed = false;
			}
		}

	}
});

// angular.module("app").directive("myDirective", function() {
// 	return {
// 		scope: {}
// 	}
// })

angular.module("app").directive("removeFriend", function() {
	return {
		restrict: "E",
		templateUrl: "removeFriend.html",
		scope: {
			notifyParent: "&method" //method atttibute on template
		},
		controller: function($scope) {
			$scope.removing = false;
			$scope.startRemove = function() {
				$scope.removing = true;
			}
			$scope.cancelRemove = function() {
				$scope.removing = false;
			}
			$scope.confirmRemove = function() {
				$scope.notifyParent({ friend: "Han"}); //overwrite parameter. If you remove Leia, it will remove Han
			}
		}
	}
});
