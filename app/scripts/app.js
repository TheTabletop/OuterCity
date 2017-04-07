'use strict';

// Defining Angular app model with all other dependent modules
var Roll4Guild = angular.module('Roll4Guild',["ngRoute"]);

Roll4Guild
    .controller('loginCtrl', function($scope, $http) {

    })

    .controller('navCtrl', function($scope){
        $scope.openNav = function() {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    })

    .controller('aboutCtrl', function($scope, $http) {
        $scope.name = 'aboutCtrl';

    })
    .controller('contactCtrl', function($scope, $http) {
        $scope.name = 'contactCtrl';


    })
    .controller('userProfCtrl', function($scope, $http) {
        $scope.name = 'userProfCtrl';


        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };


    })
    .controller('searchCtrl', function($scope, $http) {
        $scope.name = 'searchCtrl';
        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };

    })
    .controller('passNewCtrl', function($scope, $http) {
        $scope.name = 'passNewCtrl';

    })
    .controller('passVerCtrl', function($scope, $http) {
        $scope.name = 'passVerCtrl';


    })
    .controller('inboxCtrl', function($scope, $http) {
        $scope.name = 'inboxCtrl';
		$scope.currConversation = undefined;
		$scope.newMessage = undefined;
		$scope.contacts = [];
		$scope.conversations = [];
		$scope.default = {
			profilePic: 'https://pbs.twimg.com/profile_images/724556438241181696/0tQ-pyo_.jpg',
			groupPic: 'https://bigtallwords.files.wordpress.com/2015/04/lord-of-the-rings-two-towers-orc-gathering.png?w=256&h=256&crop=1'
		};
		// Called when page first loads
		$scope.init = function(conversation){
			$scope.updateContacts();
			$scope.updateGroups();
			console.log(conversation.id);
			$scope.setCurrConversation(conversation? conversation : $scope.getMostRecentConversation());
			$scope.updateMessages(conversation);
		}

		$scope.getMostRecentConversation = function() {
			$scope.updateConversations();
			return $scope.conversations[0];
		}

		// Does HTTP request, updates list of conversations
		$scope.updateConversations = function() {
			// fake data for now
			$scope.conversations = [
				{id: '101', participants: ['Frodo','Sam']},
				{id: '100', participants: ['Frodo','Sam','Pippin','Merriadoc'], groupPic: 'https://at-cdn-s01.audiotool.com/2011/08/18/documents/concerning_hobbits/1/cover256x256-530088cd58af464ebb208af0944f6f02.jpg'},
				{id: '102', participants: ['Pippin','Merriadoc']},
				{id: '103', participants: ['Gandalf','Aragorn']},
			];
		}

		// Chooses the conversation displayed
		$scope.setCurrConversation = function(conversation) {
			$scope.currConversation = conversation;
			$scope.newMessage = [];
			$scope.updateMessages();
		}

		// Does HTTP request, updates list of contacts (may not have messaged each other yet)
		$scope.updateContacts = function() {
			// fake data for now
			$scope.contacts=[
				{id:'005', participants:['Aragorn, son of Arathorn'], message:[
					{date:'11.29.2016', body:'Over hill and under tree'},
				]},
				{id:'000', participants:['Frodo'], profilePic:'https://68.media.tumblr.com/avatar_d0ed961c17e0_128.png'},
				{id:'001', participants:['Sam'], profilePic:'http://orig15.deviantart.net/0503/f/2011/089/9/1/samwise_gamgee_avatar_by_angelprincess101-d3ctyz9.png'},
				{id:'002', participants:['Pippin']},
				{id:'003', participants:['Merriadoc']},
				{id:'004', participants:['Gandalf'], messages:[
					{date:'04.14.2017', body:'Follow your nose'},
				]},
				{id:'006', participants:['Legolas'], messages:[
					{date:'05.28.2017', body:'They\'re taking the hobbits to Isengard!'},
				]},
				{id:'007', participants:['Gimli'], messages:[
					{date:'03.03.2017', body:'Salted pork!!!'},
				]},
				{id:'008', participants:['Bilbo'], messages:[
					{date:'04.25.2017', body:`Over The Misty Mountains Cold

					Far over the Misty Mountains cold,
					To dungeons deep and caverns old,
					We must away, ere break of day,
					To seek our pale enchanted gold.

					The dwarves of yore made mighty spells,
					While hammers fell like ringing bells,
					In places deep, where dark things sleep,
					In hollow halls beneath the fells.

					For ancient king and elvish lord
					There many a gleaming golden hoard
					They shaped and wrought, and light they caught,
					To hide in gems on hilt of sword.`},
				]},
			];
		}

		// Does HTTP request, gets list of groups user is a member of
		$scope.updateGroups = function() {
			// fake data fro now
			$scope.groups = [
				{id:'200', participants:['Wizards'], messages:[
					{date:'03.27.2017', body:'Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?'},
					{date:'02.05.2017', body:'I will not say, do not weep, for not all tears are an evil.'},
					{date:'02.02.2017', body:'All we have to decide is what to do with the time that is given us.'},
				]},
				{id:'201', participants:['Shirlings'], messages:[
					{date:'01.17.2017', body:'The Road goes ever on and on Down from the door where it began. Now far ahead the Road has gone, And I must follow, if I can.'},
				]},
			];
		}

		// Add someone to a conversation (new conversation ONLY?)
		$scope.includeParticipant = function() {

		}

		// Check for new messages based on current conversation
		$scope.updateMessages = function() {
			// check for unread messages, append to front of queue

			$scope.messages = $scope.getMessages($scope.currConversation, Date());
		}

		$scope.getMessages = function(nextConversation, timestamp){
			// temporary
			for(var conversation in $scope.conversations.concat($scope.groups)){
				if(conversation.id == nextConversation.id){
					console.log(conversation.messages, conversation.id);
					return conversation.messages;
				}
			}

		}

		// Go deeper into message backlog, appending older ones to back of queue
		$scope.getNextNolderMessages = function(numMessagesToGet) {

		}

		// $scope.conversation=['Frodo', 'Gimli'];
		$scope.listNames = function(names){
			return names.join(', ');
		}
    })

   Roll4Guild
    .controller('userWallCtrl', function($scope, $http) {
        $scope.name = 'userWallCtrl';
        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };
    })
    .controller('groupProfCtrl', function($scope, $http) {
        $scope.name = 'groupProfCtrl';
        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };
    })
    .controller('groupWallCtrl', function($scope, $http) {
        $scope.name = 'groupWallCtrl';
        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };
    })
    .controller('editProfCtrl', function($scope, $http) {
        $scope.name = 'editProfCtrl';
        $scope.init = function () {
            $http.get("https://www.omdbapi.com/?t=Star+Wars")
                .then(function successCallback(response){
                    $scope.details = response.data;

                }, function errorCallback(response){
                    console.log("Unable to perform get request");
                });
        };
    })
