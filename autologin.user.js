// ==UserScript==
// @name          Auto Login 
// @namespace     http://dsin.blogspot.com
// @description   auto login to page
// @include https://confluence.site.com/login.action*
// @include https://jira.site.com/login.jsp*
// @include https://blitzkrieg.site.com/ldap/login
 
// ==/UserScript== 
var username = 'username';
var password = 'password';
var pages = {
    'confluence.site.com/login.action': {'username_node_id': 'os_username', 
                                                       'username': username, 
                                                       'password_node_id': 'os_password',
                                                       'password': password, 
                                                       'submit_button_node_id': 'loginButton'},
    'jira.site.com/login.jsp': {'username_node_id': 'login-form-username', 
                                                  'username': username, 
                                                  'password_node_id': 'login-form-password',
                                                  'password': password,
                                                  'submit_button_node_id': 'login-form-submit'},
    'blitzkrieg.site.com/ldap/login': {'username_node_id': 'username', 
                                                  'username': username, 
                                                  'password_node_id': 'password',
                                                  'password': password,
                                                  'submit_form_node_id': 'loginForm'}
             };

var getLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

var url_o = getLocation(String(window.location.href).replace(/;jsessionid=(.*)$/, ''));
var current_url = url_o.hostname+url_o.pathname;
if(current_url in pages){
    var page = pages[current_url];

    document.getElementById(page['username_node_id']).value = page['username'];
    document.getElementById(page['password_node_id']).value = page['password'];
    if('submit_button_node_id' in page){
        document.getElementById(page['submit_button_node_id']).click();    
    } else if('submit_form_node_id' in page){
        document.getElementById(page['submit_form_node_id']).submit();    
    }
}

