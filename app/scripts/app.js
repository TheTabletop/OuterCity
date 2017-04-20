'use strict';

// Defining Angular app model with all other dependent modules
var Roll4Guild = angular.module('Roll4Guild',["ngRoute"]);

Roll4Guild
    .controller('loginCtrl', function($scope, $http) {


        $scope.showMeTheMoney = function(){
            var data = {
                "hero":$scope.email,
                "key":$scope.password
            };
            console.log(data.hero);
            console.log(data.key);
        }

       $scope.submit = function(){
           var data = {
               "hero":$scope.email,
               "key":$scope.password
           };
           $http.post("www.todo.com/login", data)
               .then(function successCallback(response){
                   $rootScope.userID = response.uhid;
               }, function errorCallback(response){
               console.log("Credentials don't match known user!");
               $scope.reset();
           });
       };

        $scope.reset = function(){
            $scope.email="";
            $scope.password="";
        };
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
		$scope.uncontactedContacts = [];
		// $scope.Conversation = {
		// 	includeParticipants:function(sdf) {
		// 		console.log("blah");
		// 	},
		// }
		$scope.newConversation = {
			// prototype:$scope.Conversation,
			body:undefined,
			sender:$scope.myUserName,
			participants:[],
			messages:[{body:undefined}],
			isNew:true,
			removeParticipant:function(nameToRemove){
				this.participants = this.participants.filter(function(name) {
					return name !== nameToRemove;
				})
			},
			includeParticipants:function(participants) {
				var currParticipants = $scope.currConversation.participants;
				$scope.currConversation.participants = [...new Set(participants.concat(currParticipants))];
			},
		};

		$scope.currConversation={
			// prototype:$scope.Conversation,
			participants:undefined,
			messages:[],
			message:"",
		};
		$scope.newMessage = {};
		$scope.contacts = [];
		$scope.conversations = [];
		$scope.default = {
			profilePic: 'https://pbs.twimg.com/profile_images/724556438241181696/0tQ-pyo_.jpg',
			groupPic: 'https://bigtallwords.files.wordpress.com/2015/04/lord-of-the-rings-two-towers-orc-gathering.png?w=256&h=256&crop=1'
		};
		// Called when page first loads
		$scope.init = function(conversation, newMessage){
			conversation = (conversation? conversation : $scope.getMostRecentConversation())
			$scope.myUserName = 'Frodo';
			$scope.updateInbox();
			if(conversation.upid) {
				$scope.setCurrConversation(conversation);
			}
			else if(conversation.uhid) {
				// add participant to new conversation
				$scope.setCurrConversation({
					body:undefined,
					sender:$scope.myUserName,
					participants:conversation.participants,
					messages:[{body:undefined}],
				});
			}
			else if(conversation.ugid) {

			}
			else{
				$scope.setCurrConversation(conversation);
			}

			$scope.newMessage = newMessage? newMessage : {};
		}
		$scope.updateInbox = function() {
			$scope.updateContactBrowser();
		}

		$scope.getMostRecentConversation = function() {
			$scope.updateConversations();
			return $scope.conversations[0];
		}

		// Chooses the conversation displayed
		$scope.setCurrConversation = function(conversation) {
			$scope.currConversation = conversation;
			$scope.updateMessages();
		}

		$scope.updateContactBrowser = function() {
			$scope.updateGroups();
			$scope.updateContacts();
			$scope.updateConversations();
			$scope.updateUncontactedContacts();
		}

		// Does HTTP request, updates list of conversations
		$scope.updateConversations = function() {
			// fake data for now, by definition all conversations
			// don't list self in participants on page
			$scope.conversations = [
				{upid: '100', participants: ['Sam','Pippin','Merriadoc'], profilePic: 'https://at-cdn-s01.audiotool.com/2011/08/18/documents/concerning_hobbits/1/cover256x256-530088cd58af464ebb208af0944f6f02.jpg', messages:[
					{date:'10.21.2016', sender:'Pippin', body:'Mushrooms!!'},
				],},
				{upid: '101', participants: ['Sam'], messages:[
					{date:'11.29.2016', sender:'Sam', body:'Over hill and under tree'},
				]},
				{upid: '103', participants: ['Gandalf','Aragorn son of Arathorn'], messages:[
					{date:'04.14.2017', sender:'Gandalf', body:'Follow your nose'},
				]},
			];
		}

		// Does HTTP request, updates list of contacts (may not have messaged each other yet)
		$scope.updateContacts = function() {
			// fake data for now
			$scope.contacts=[
				{uhid:'005', participants:['Aragorn son of Arathorn']},
				{uhid:'000', participants:['Frodo'], profilePic:'https://68.media.tumblr.com/avatar_d0ed961c17e0_128.png'},
				{uhid:'001', participants:['Sam'], profilePic:'http://orig15.deviantart.net/0503/f/2011/089/9/1/samwise_gamgee_avatar_by_angelprincess101-d3ctyz9.png'},
				{uhid:'002', participants:['Pippin']},
				{uhid:'003', participants:['Merriadoc']},
				{uhid:'004', participants:['Gandalf']},
				{uhid:'006', participants:['Legolas']},
				{uhid:'007', participants:['Gimli']},
				{uhid:'008', participants:['Bilbo']},
			];
		}

		// Looks at lists of conversations and lists of contacts
		// and updates list of contacts that have not yet been contacted
		$scope.updateUncontactedContacts = function() {
			var contactedContacts = {};
			for(var i in $scope.conversations) {
				var conv = $scope.conversations[i];
				if(conv.participants.length === 1) {
					contactedContacts[conv.participants[0]] = undefined;
				}
			}
			$scope.uncontactedContacts = $scope.contacts.filter(function(contact) {
				return !(contact.participants in contactedContacts);
			})
		}

		// Does HTTP request, gets list of groups user is a member of
		$scope.updateGroups = function() {
			// fake data fro now
			$scope.groups = [
				{ugid:'201', participants:['Shirelings'], messages:[
					{date:'01.17.2017', sender:'Frodo', body:'The Road goes ever on and on Down from the door where it began. Now far ahead the Road has gone, And I must follow, if I can.'}, {date:'04.25.2017', sender:'Bilbo', body:`Over The Misty Mountains Cold

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
				{ugid:'200', participants:['Wizards'], messages:[
					{date:'03.27.2017', sender:'Gandalf', body:'Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?'},
					{date:'02.05.2017', sender:'Gandalf',  body:'I will not say, do not weep, for not all tears are an evil.'},
					{date:'02.02.2017', sender:'Gandalf',  body:'All we have to decide is what to do with the time that is given us.'},
				]},
				{ugid:'202', participants:['Fellowship'], messages:[
					{date:'03.03.2017', sender:'Gimli', body:'Salted pork!!!'},
				]},
			];
		}

		// Check for new messages based on current conversation
		$scope.updateMessages = function() {
			// check for unread messages, append to front of queue
			$scope.currConversation.messages = $scope.getMessages($scope.currConversation, Date());
			// update "unread messages" indicators
		}

		// Update displayed messages for the given conversation
		$scope.getMessages = function(nextConversation, timestamp){
			// temporary
			var noMessages = [{date:undefined, body:"(no messages)"}];
			var conversations = $scope.conversations.concat($scope.groups);
			var conversation = undefined;
			if( !nextConversation || !nextConversation.upid){
				return noMessages;
			}
			for(var i = 0; i < conversations.length; i++){
				conversation = conversations[i];
				if(conversation.upid === nextConversation.upid){
					// console.log(conversation.participants, conversation.messages);
					return conversation.messages;
				}
			}
			return noMessages;

		}

		$scope.getMessageBody = function(msg, messages) {
			return $last;
			// return ($index == messages.length? "beginning of message history" : "");
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
