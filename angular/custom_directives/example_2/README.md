EXAMPLE 2: 

	Events, Scope, and Controllers

	Build a Component Directives

	Don't violate the law of incapcilation by having a controller of directive on a main controller

	Adding a Controller to handle events

	DIRECTIVE SCOPES: there are three ways you can build relationship with a directive scope and a containing controller scope.

		1. SHARED SCOPE: Share a directive scope with a containing controller scope. Directive scope lives entirely within the parent scope and has access to all the objects created in parent controller scope. 

		If the directive were to modify or add new items on the object then the name will belong to the parent scope not the directive scope.

		This is by default.

		EXAMPLE: 
			 angular.module("app").directive("userInfoCard", function() {
				return {
					restrict: "E",
					templateUrl: "userInfoCard.html",
					controller: function($scope) {
						$scope.knightMe = function(user) {
						user.rank = "knight";
						}
						console.log($scope);
					}
				}
			})

		2. INHERITED SCOPE: Parent Controller has the user object. We have a directive with the inherited scope. Now, if we were to create a new item on the scope inside of our directive that item will become internal to the directive itself and not visible to the parent scope.

		Add scope attribute to the directive and set it true to create inherited directive. If you set scope to false it will be a shared scope.

		****Child scope (inherited directive) has access to parent scope but not vice versa. However, the main difference is not the visibility but when inherited directive adds an item to the object it will become interal to the directive itself.***

		EXAMPLE:
			angular.module("app").directive("userInfoCard", function() {
				return {
					restrict: "E",
					templateUrl: "userInfoCard.html",
					scope: true,
					controller: function($scope) {
						$scope.knightMe = function(user) {
						user.rank = "knight";
						}
						console.log($scope);
					}
				}
			})
		
		3.ISOLATED SCOPE: Parent Controller has the user object. We have a directive with the inherited scope. Now, if we were to create a new item on the scope inside of our directive that item will become internal to the directive itself and not visible to the parent scope.

		The main difference is isolated scope can't see data on the parent scope. To solve this problem you can create special binding between parent scope and child scope on object by object basis.

		To solve it, change the scope from true to an object, you have created the isolated scope. Set the the property name to "=" and wherever you define directive add an attribute with the property name and pass in the object name.

		EXAMPLE:
			
			CONTROLLER:
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
					console.log($scope);
					
				});

			DIRECTIVE: 
			angular.module("app").directive("userInfoCard", function() {
				return {
					restrict: "E",
					templateUrl: "userInfoCard.html",
					scope: {
						user: "="
						},
					controller: function($scope) {
						$scope.knightMe = function(user) {
						user.rank = "knight";
						}
						console.log($scope);
					}
				}
			})

			HTML (where the directive is injected):
			<user-info-card user="user"></user-info-card>


