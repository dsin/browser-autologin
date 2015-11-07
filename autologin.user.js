// ==UserScript==
// @name          Auto Login 
// @namespace     http://dsin.blogspot.com
// @description   auto login to page
// @include https://dsin.appspot.com/*
// @include https://dsin.appspot.com/
 
// ==/UserScript== 
var username = "";
var password = "";

document.getElementById("login").value = username;
document.getElementById("password").value = password;
document.getElementById("SubmitButton").click();
