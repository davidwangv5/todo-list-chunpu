'use strict';

(function() {
  var app = angular.module('todoApp', []);


  app.controller('ShowController',function(){
		this.list = events;
		this.choice = '';

		this.change=function(event){
			event.complete = !(event.complete);
		};

		this.remove=function(index){
			this.list.splice(index, 1);
		};

		this.event = {};
		this.event.complete = false;
		this.add=function(list){
			console.log(events);
			list.push(this.event);
			this.event = {};
			this.event.complete = false;
		};
	});

  var events = [
	{
	  content: 'finish simulation',
	  complete: true
	}, {
	  content: 'do a todo list',
	  complete: false
	}
	];
})();



