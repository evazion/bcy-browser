// ==UserScript==
// @name         BCY.net Browser
// @description  Allows browsing BCY.net without an account.
// @version      2
// @author       evazion
// @namespace    http://github.com/evazion/bcy-browser
// @homepageURL  http://github.com/evazion/bcy-browser
// @downloadURL  https://github.com/evazion/bcy-browser/raw/master/bcy-browser.user.js
// @include      *://bcy.net/*
// @run-at       document-end
// ==/UserScript==

// Disable login nag messages.
Auth.unLogin = () => false;

// Disable opening links in new tabs.
$('[target="_blank"]').attr("target", "");

// Artists have the option to disable downloads of their works, which just
// disables right-clicking on their images. This re-enables it.
$(".js-maincontent img, .lightbox-wrap, .lb-container").off("contextmenu dragstart click");
