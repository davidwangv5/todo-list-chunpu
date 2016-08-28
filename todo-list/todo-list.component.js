
'use strict';
angular.
	module('todoList').
	component('todoList',{
		templateUrl:'todo-list/todo-list.template.html',
		controller: function TodoListController(localStorageService,$scope) {
		  //var self = this;
		  //$scope.choice = '';

		  $scope.event = {};
		  $scope.event.complete = false;
		  $scope.event.color = {"color":"black"};
		  $scope.addEvent = function(){
		  	$scope.events.push($scope.event);
		  	$scope.event = {};
		  	$scope.event.complete = false;
		  	$scope.event.color = {"color":"black"};
		  	//localStorageService.set('events', $scope.events);
		   // console.log(todoInstore);
		  };

		  $scope.change=function(event){
			event.complete = !(event.complete);
			if (event.complete === true){
		  		event.color = {"color":"red"};
		  		event.color = {"color":"red"};

			}else{
				event.color = {"color":"black"};
			}

		  	//localStorageService.set('events', $scope.events);
		  };

		  $scope.remove=function(index){
			$scope.events.splice(index, 1);
		  	//localStorageService.set('events', $scope.events);
		  };

		 //var todoInstore = localStorageService.get('todoList');
		 $scope.events = localStorageService.get('events') || [];
		 //console.log(todoInstore);

		 $scope.$watch('events', function () {
            localStorageService.set('events', $scope.events);
            console.log("watch is called");
          }, true);


        /*var bgColors = localStorageService.get('bgColors');
        $('aside').css('background', bgColors);

        $scope.changeBgColor = function(color) {
            localStorageService.set('bgColors', color);
            bgColors = localStorageService.get('bgColors');
            $('aside').css('background', bgColors);
        }		   

		 /* this.events = [
		    {
		      content: 'finish simulation',
		      complete: true
		    }, {
		      content: 'do a todo list',
		      complete: false
		    }
		  ];*/
		}
	});
