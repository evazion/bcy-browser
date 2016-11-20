// ==UserScript==
// @name         BCY.net Browser
// @description  Allows browsing BCY.net without an account.
// @version      1
// @author       evazion
// @namespace    http://github.com/evazion/bcy-browser
// @homepageURL  http://github.com/evazion/bcy-browser
// @downloadURL  https://github.com/evazion/bcy-browser/raw/master/bcy-browser.user.js
// @include      *://bcy.net/*
// @run-at       document-end
// ==/UserScript==

// Disable login nag messages.
Auth.unLogin = () => false;
