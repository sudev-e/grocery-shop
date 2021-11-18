
//Creating a function which will be called when button is clicked
function ajax(){

// Creating an XHR object and assign it to a var xhttp
var xhttp = new XMLHttpRequest();

//Event listener to check if the status of req is changing
xhttp.onreadystatechange = function(){

    //if readystatus is changed to done(4) & status changed to 200(server processed the req)
    if(this.readyState==4 && this.status==200){

        // Copying contents from server to div block, reponseText contains content of server
        // JSON.parse will convert the JSON text to normal text inside reponse Text
        var response = JSON.parse(this.responseText);       
    	var tbody = document.getElementById('tbody');
        var Jgrocery = response.grocery;
        
		for (var i = 0; i < Jgrocery.length; i++){
			var row = `<tr class = "table-danger">

							<td>${Jgrocery[i].SerialNo}</td>
							<td>${Jgrocery[i].Name}</td>
							<td>${Jgrocery[i].Quantity}</td>
							<td>${Jgrocery[i].Unit}</td>
							<td>${Jgrocery[i].Department}</td>
							<td>${Jgrocery[i].Notes}</td>
							<td><input type="checkbox"></td>
					  </tr>`
			tbody.innerHTML += row


             }
	  
        }
    }

    //Instantiating req object
    //GET bcz we r taking only small amount of data
    xhttp.open("GET","grocery.json",true);

    //send req to server
    xhttp.send();
}
window.addEventListener("load", ajax);

