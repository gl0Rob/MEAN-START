var app = angular.module('myApp', []);

app.directive('testDir', ['$http' ,function($http){
	return {
		restrict : 'E',
		templateUrl : 'directives/elements/testDir.html',
		controller : function(){
			this.data = 'loading';
			var me = this;
			$http.get('http://port-8081.ga7of71y1ll3di79w20fy2eq9z4cxrdq5xea0s25tdquxr.box.codeanywhere.com/welcome.json').
				success(function(data){
					me.data = data;
				}).
				error(function(data){
					me.data = data;
				});

		},
		controllerAs : 'testCtrl'
	};
}]);