
'use strict';
angular.
	module('todoList').
	component('todoList',{
		templateUrl:'todo-list/todo-list.template.html',
		controller: function TodoListController($http) {
		  //var self = this;
		  
		  this.choice = '';

		  var self = this;
	      $http.get('/todo-list/events.json').then(function(response) {
	        self.events = response.data;
	      });

		  self.event = {};
		  self.event.complete = false;
		  self.addEvent = function(){
		  	this.events.push(this.event);
			//$http.post('http://localhost:8000/events.json', self.event);
			/*.success(function(){
	            alert('Data saved');
	        }).error(function(data) {
	            alert('failure');
	        });

			/*var req = {
			 method: 'POST',
			 url: 'todo-list/events.json',
			 data: { 'content': 'test' ,'complete': true}
			}

			$http(req).then(function successCall() { alert('success');}, function errorCall(){ alert('fail');});
			*/

		  	self.event = {};
		  	self.event.complete = false;
		  };

		  this.change=function(event){
			event.complete = !(event.complete);
		  };

		  this.remove=function(index){
			this.events.splice(index, 1);
		  };

		  /*this.events = [
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
