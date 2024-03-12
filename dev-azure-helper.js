// ==UserScript==
// @name         Azure DevOps helper
// @namespace    http://tampermonkey.net/
// @version      2024-03-12
// @description  Generate release notes from Azure DevOps work items on the pull request page
// @author       Alexander Savinykh
// @match        https://dev.azure.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.getWorkItemsInfo = function() {
        const links = document.querySelectorAll('a.bolt-link');
        /** @type {Array<string>} */
        const taskNames = [];
        let countOfLinks = 0;
        links.forEach(link => {
            if (link instanceof HTMLAnchorElement)
                if (link.href.includes('_workitems/'))
                    taskNames.push(link.innerText);
        });
        console.log(taskNames.join('\n'));
    };
    // Your code here...
})();