// ==UserScript==
// @name         Read issue numbers
// @namespace    http://tampermonkey.net/
// @version      2024-03-12
// @description  try to take over the world!
// @author       Alexander Savinykh
// @match        https://dev.azure.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.getWorkItemsInfo = function() {
        const links = document.querySelectorAll('a.bolt-link');

    };
    // Your code here...
})();