$( document ).ready(function() {
    // DOM ready

    // Test data
    /*
     * To test the script you should discomment the function
     * testLocalStorageData and refresh the page. The function
     * will load some test data and the loadProfile
     * will do the changes in the UI
     */
    // testLocalStorageData();
    // Load profile if it exits
});

function login() {
    var usernames = ['a', 'admin', 'Admin', 'ADMIN'];
    var passwords = ['a', 'admin', 'Admin', 'ADMIN'];
    var usernameVal = $("#inputUsername").val();
    var passwordVal = $("#inputPassword").val();
    var usernamesIndex = usernames.indexOf(usernameVal);
    var passwordIndex = passwords.indexOf(passwordVal);

    if(!usernameVal) {
        displayError('Username is required');
        return;
    }
    
    if (usernameVal.match(/^[a-zA-Z]+$/) == null) {
        displayError('Only letters are allowed for username');
        return;
    }

    if(!passwordVal) {
        displayError('Password is required');
        return;
    }

    if (passwordVal.match(/^[a-zA-Z]+$/) == null) {
        displayError('Only letters are allowed for password');
        return;
    }

    if ((usernamesIndex == passwordIndex) && (usernamesIndex > -1)) {
       $('#logged-in').show();
       $('#login-form').hide();
    } else if (usernameVal.length > 20 || passwordVal.length > 20) {
        displayError('You have exceeded max characters length for one of the fields');
    }
    else {
        displayError('Username or password incorrect');
    }
}

function displayError(error) {
    $('#error').text(error);
    $('#my-modal').modal('toggle');
}

function logout() {
    location.reload();
}