

function get() {
  var x = document.getElementById("form");
  console.log(x.elements[0].value);
  var username = x.elements[0].value;

  console.log(username);

  var link = "https://www.instagram.com/" + username + "/?__a=1";
  
  if (username == "") {
    alert("Username cannot be empty!");
  } else {

  document.getElementById("id01").style.display = "block";

  fetch(link)
    .then(response => {
      console.log("tia");
      return response.json();
    }).catch(function() {
        
        alert("Username not found!");
        document.getElementById("id01").style.display = "none";
    })
    .then(data => {
      console.log(data.graphql);
      console.log(data.graphql.user.profile_pic_url_hd);
      var img = data.graphql.user.profile_pic_url_hd;
      var name = data.graphql.user.full_name;
      var username = data.graphql.user.username;
      var followers = data.graphql.user.edge_followed_by.count;
      var following = data.graphql.user.edge_follow.count;
      document.getElementById("username").innerHTML = username;
      document.getElementById("followdetails").innerHTML = "<b>" + name + "</b>" + "<br>" +
        followers + " <span style=\"font-weight: 300\"> followers | </span>" + following + " <span style=\"font-weight: 300\">  following </span>";
      document.getElementById("image").src = img;

      var img_download = img;
    });
  }
}

function download() {
  var x = document.getElementById("form");
  console.log(x.elements[0].value);
  var username = x.elements[0].value;

  console.log(username);

  var link = "https://www.instagram.com/" + username + "/?__a=1";

  if (username == "") {
    alert("Username cannot be empty!");
  } else {
  
  document.getElementById("id01").style.display = "block";

  fetch(link)
    .then(response => {
      console.log("tia");
      return response.json();
    }).catch(function() {
        
        alert("Username not found!"); 
        document.getElementById("id01").style.display = "none";
    })
    .then(data => {
      var img = data.graphql.user.profile_pic_url_hd;

      window.open(img, '_blank');
    });
  }
}