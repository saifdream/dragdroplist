angular.module("demo", ["dndLists"]);

angular.module("demo").controller("TypesDemoController", function ($scope, $http) {

    $scope.removeCurrentlist = function (index, person) {

        $scope.removedUser.push({ id:person.id, name: person.name, type: "RemovedUser" });
        $scope.currentUser.splice(index, 1)

    };

    $scope.removeRemovedlist = function (index, person) {

        $scope.currentUser.push({ id:person.id, name: person.name, type: "CurrentUser" });
        $scope.removedUser.splice(index, 1)

    }

    $scope.removeAvailablelist = function (index, person) {

        $scope.addedUser.push({ id:person.id, name: person.name, type: "AddedUser" });
        $scope.availablelist.splice(index, 1)

    };

    $scope.removeAddedUser = function (index, person) {

        $scope.availablelist.push({ id:person.id, name: person.name, type: "availableuser" });
        $scope.addedUser.splice(index, 1)

    };

    $scope.currentUser = [
                           { id: 1, name: "Bob", type: "CurrentUser" },
                           { id: 2, name: "Charlie", type: "CurrentUser" },
                           { id: 3, name: "Dave", type: "CurrentUser" },
                           { id: 4, name: "Alice", type: "CurrentUser" },
                           { id: 5, name: "Eve", type: "CurrentUser" },
                           { id: 6, name: "Peggy", type: "CurrentUser" }
                        ];

    $scope.removedUser = [];

    $scope.addedUser = [];

    $scope.availablelist = [
                             { id: 7, name: "Frank", type: "availableuser" },
                             { id: 8, name: "Mallory", type: "availableuser" },
                             { id: 9, name: "Alex", type: "availableuser" },
                             { id: 10, name: "Oscar", type: "availableuser" },
                             { id: 11, name: "Aliceh", type: "availableuser" },
                             { id: 12, name: "Ever", type: "availableuser" },
                             { id: 13, name: "Frank", type: "availableuser" },
                             { id: 14, name: "Mallory", type: "availableuser" },
                             { id: 15, name: "Alex", type: "availableuser" },
                             { id: 16, name: "Oscar", type: "availableuser" },
                             { id: 17, name: "Aliceh", type: "availableuser" },
                             { id: 18, name: "Ever", type: "availableuser" },
                             { id: 19, name: "Peggygf", type: "availableuser" }
                           ];

	$scope.save = function () {
		/*
        $http({
            method  : 'POST',
            url     : 'receive.html',
            //dataType: 'json',
            data    : { removed: $scope.removedUser, added: $scope.addedUser }
        }).success(function(data){
            if (data.success) {
                alert("Sumitting Success!");
            } else {
                alert("Sumitting failure!!");
            }
        });
		*/
		$.each($scope.addedUser, function(idx, val) {
		//$scope.addedUser.each(function(idx, val) {
		//$scope.addedUser.forEach(function(val) {
		//$scope.addedUser.forEach(function(idx, val) {
			$("<input type='hidden' />")
				.attr("value", val.id)
				.attr("name", "addedElem["+idx+"]")
				.appendTo("#listBoard");
		});
		
		$("#listBoard").submit();
	}

});
