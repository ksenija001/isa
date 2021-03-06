var guestHomeModule = angular.module('guestHome.controller', []);
 

guestHomeModule.controller('guestHomeController', ['$scope','$location', '$http',
  	function ($scope, $location, $http) {

	var reserveRestaurant = "";

	$scope.duration="";
	
	var user = "";
	angular.element(document).ready(function () {
		
		$scope.isReadOnly = true;
		$scope.sortType     = 'name'; // set the default sort type
		$scope.sortReverse  = false;  // set the default sort order
		$scope.searchTerm   = '';     // set the default search/filter term
		
		$scope.test = "ne radi";
        $http.get('/user/getLoggedInUser').then(function(response) {
			   user = response.data;
			   $scope.ime = user.name;
			   $scope.prezime = user.surname;
			   $scope.email = user.email;
			   
			}, function(response) {
				alert(response.statusText);
		});
        
        $http.get('/user/getAllUsers').then(function(response) {
		   $scope.allUsers = response.data;
		}, function(response) {
			alert(response.statusText);
	   });
        
        $http.get('/user/getFriends').then(function(response) {
        	$scope.friends = response.data;
 		}, function(response) {
 			alert(response.statusText);
 	    });
        
        $http.get('/user/getPendingRequests').then(function(response) {
        	$scope.pendingRequests = response.data;
 		}, function(response) {
 			alert(response.statusText);
 	   });
        
        $http.get('/user/getFriendSuggestions').then(function(response) {
 		   $scope.friendSuggestions = response.data;
 		}, function(response) {
 			alert(response.statusText);
 	    });
        
        $http.get('/user/getFriendSuggestions').then(function(response) {
  		   $scope.friendSuggestions = response.data;
  		}, function(response) {
  			alert(response.statusText);
  	    });
        
        $http.get('/user/getVisits').then(function(response) {
   		   $scope.visits = response.data;
   		}, function(response) {
   			alert(response.statusText);
   	    });
        
        $http.get('/restaurant/getAllRestaurants').then(function(response) {
    	   $scope.restaurants = response.data;
    	}, function(response) {
    		alert(response.statusText);
    	});
        
        
        
	});
	
	$scope.dodajPrijatelja = function(event) {
		var dp = document.getElementById(event.target.id).getAttribute("name");
		$http.get('/user/addFriend/'+dp).then(function(response) {
			toastr.success("Zahtev poslat!");
		}, function(response) {
			alert(response.data);
		});
	}
	
	$scope.prihvatiPrijatelja = function(event) {
		var pp = document.getElementById(event.target.id).getAttribute("name");
		$http.get('/user/acceptFriendRequest/'+pp).then(function(response) {
			toastr.success("Zahtev prihvacen!");
		}, function(response) {
			alert(response.statusText);
		});
	}
	
	$scope.odbijPrijatelja = function(event) {
		var op = document.getElementById(event.target.id).getAttribute("name");
		$http.get('/user/denyFriendRequest/'+op).then(function(response) {
			toastr.info("Zahtev odbijen!");
		}, function(response) {
			alert(response.statusText);
			$window.location.reload();
		});
	}
	
	$scope.removeFriend = function(event) {
		var obp = document.getElementById(event.target.id).getAttribute("name");
		$http.get('/user/removeFriend/'+obp).then(function(response) {
			toastr.info("Prijatelj obrisan.");
		}, function(response) {
			alert(response.statusText);
		});
	}
	
	

	$scope.clickEdit = function() {
		if ($scope.isReadOnly == true) {
			$scope.isReadOnly = false;
		} else {
			$scope.isReadOnly = true;
			
			user.name = $scope.ime;
			user.surname = $scope.prezime;
			user.email = $scope.email;
			
			$http.post('/user/updateUserInfo', user).then(function(response) {
				if(response == "EmailError")
					toastr.error("Već postoji nalog sa tom email adresom.");
				else 
					toastr.success("Nalog uspešno ažuriran.");
				}, function(response) {
					alert(response.statusText);
			});
		}
	}
	
	$scope.promeniLozinku = function() {
		if($scope.staraLozinka == user.password) {
			if ($scope.novaLozinka == $scope.novaLozinka2) {
				if ($scope.novaLozinka != "") {
					user.password = $scope.novaLozinka;
					
					$http.post('/user/updatePassword', user).then(function(response) {
							if(response.data == "OK")
								toastr.success("Uspešno promenjena lozinka!");
						}, function(response) {
							alert(response.statusText);
					});
					
					$scope.staraLozinka = "";
					$scope.novaLozinka = "";
					$scope.novaLozinka2 = "";
				} else {
					toastr.error("Lozinka ne sme biti prazna!");
					$scope.staraLozinka = "";
					$scope.novaLozinka2 = "";
				}
			} else {
				toastr.error("Lozinke se ne podudaraju.");
				$scope.staraLozinka = "";
				$scope.novaLozinka = "";
				$scope.novaLozinka2 = "";
			}
		} else {
			toastr.error("Pogrešna lozinka!");
			$scope.staraLozinka = "";
			$scope.novaLozinka = "";
			$scope.novaLozinka2 = "";
			
		}
	}
	
	$scope.filterFn = function(user) {
		var check = user.name.concat(" "+user.surname);
		if(check.includes($scope.searchKeyword))
	    {
	        return true; 
	    }
		return false;
	};
	

	$scope.reserve = function(id) {
		$scope.reserveRestaurant = id;
		reserveRestaurant = id;
		toastr.success(id);
		$location.path("/guestHome/date");
	}
	
	$scope.initt = function() {
		$('#datetime').datetimepicker({
			minDate: new Date(),
			format: 'DD-MM-YYYY HH:mm'
			
		});
	}
	
	$scope.reserveDateNext = function() {
		var datetime = $('#dateTextField').val();
		var duration = $scope.duration;
		if(datetime == ""){
			toastr.info("Unesite datum i vreme.");
		} else if ($scope.duration == "undefined"){
			toastr.info("Unesite trajanje rezervacije.");
		} else if ($scope.duration == ""){
			toastr.info("Unesite trajanje rezervacije.");
		} else if (isNaN($scope.duration)){
			toastr.error("Trajanje mora biti ceo broj sati!")
		} else if(!Number.isInteger(+duration)){
			toastr.error("Trajanje mora biti ceo broj sati!");
		} else {
			$location.path("/guestHome/tables");
		}
	} 
	
	$scope.drawTables = function() {
		
		
		$http.get('/restaurant/getAllTables').then(function(response) {
  	   		$scope.tables = response.data;
  		}, function(response) {
  			alert(response.statusText);
  		});
		
		var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
		
		ctx.fillStyle = "red";
		ctx.rect(20,20,150,100);
		ctx.stroke();
		
		var text = "11";
		ctx.fill();
		ctx.fillStyle = "black"; 
		var font = "bold " + 20 +"px serif";
		ctx.font = font;
		ctx.textBaseline = "top";
		ctx.fillText(text, 25 ,25);	
	}
}]);


