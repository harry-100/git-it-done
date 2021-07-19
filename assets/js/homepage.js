var getUserRepos = function(user) {
    
    //format the github api url
    var apiurl = "https://api.github.com/users/" + user + "/repos";
    
    // make a request to the url

    fetch(apiurl).then(function(response){
    response.json().then(function(data){
        console.log(data);
    } )
});
};
getUserRepos("microsoft");