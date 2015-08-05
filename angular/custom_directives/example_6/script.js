angular.module("app", []);

angular.module("app").controller("mainCtrl", function($scope) {
	$scope.messages = [];

	$scope.handlePause = function(e) {
		console.log(e);
		$scope.messages.push({text: "paused"});
	}
	
});

angular.module("app").directive("spacebarSupport", function() {
	return {
		restrict: "A",
		link: function(scope, el, attrs) {
			var vidEl = el[0];
			$("body").on("keypress", function(evt) {
				if(evt.keyCode === 32) {
					if (vidEl.paused) {
						vidEl.play();
					} else {
						vidEl.pause();
					}
				}
			})
		}
	}
});

angular.module("app").directive("eventPause", function($parse) {
	return {
		restirct: "A",
		link: function(scope, el, attrs) {
			var fn = $parse(attrs["eventPause"]);
			el.on("pause", function(event) {
				scope.$apply(function() {
					fn(scope, {evt: event})
				})
			})
		}
	}
});
