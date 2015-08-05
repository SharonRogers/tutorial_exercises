EXAMPLE 5: 
	
	ISOLATED SCOPES- OVERRIDING FUNCTION PARAMETERS

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
