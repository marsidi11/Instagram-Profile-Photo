var URL = "https://api.cloudinary.com/v1_1/webf1world/image/upload"
var UnsignedUploadPreset = "ggxksstt"

var	xhr = new XMLHttpRequest();

function get_photo() {

	username = document.getElementById("username").value;

	//var find_id = 'https://www.instagram.com/' + username + '/?__a=1';

	/*$.getJSON(find_id, function(json) {

		var user_id = json.graphql.user.id;

		console.log("User ID: " + user_id)

		var photo = json.graphql.user.profile_pic_url_hd; // Profile photo

		console.log("Photo: " + photo);

		document.getElementById("profile").src = photo;

	})*/

	var find_photo = "https://imgtagram.com/u/" + username;



};


function server_photos() {
	xhr.open("GET", )
}

function button() {
	get_photo();
}

function enter() {
	if (event.keyCode == 13) {
		get_photo()
	}
}


function upload() {

	var file = document.getElementById("profile").src;

	var formData = new FormData();
	

	formData.append("file", file);
	formData.append("upload_preset", UnsignedUploadPreset);
	formData.append("tags", document.getElementById("username").value);

	xhr.open("POST", URL);

	xhr.onload = () => {

   		if (xhr.status === 200) { // Succes

   			var response = JSON.parse(xhr.response);
   			var server_image = response.secure_url; // https address of uploaded file
   			console.log("Server Image: " + server_image)
   			alert("Uploaded")

   		} else { // Error

   			alert("Upload failed. Please try agian.");
   		}
	}

	xhr.send(formData);
}