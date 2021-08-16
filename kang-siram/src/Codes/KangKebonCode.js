export const KangKebon = `
// ==UserScript==
// @name         Kang Kebun
// @namespace    http://tampermonkey.net/
// @version      1.1.14
// @description  try to take over the world!
// @author       You
// @match        https://marketplace.plantvsundead.com/*
// @icon         https://plantvsundead.com/assets/img/icon.svg
// @updateURL    https://github.com/fakhripraya/KangKebon/raw/main/monyet-pengganggu-pvu.user.js
// @require      https://cdn.jsdelivr.net/npm/toastify-js
// @resource     REMOTE_CSS https://raw.githubusercontent.com/fakhripraya/KangKebon/main/toast.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // Load remote JS
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://www.cssscript.com/demo/simple-vanilla-javascript-toast-notification-library-toastify/src/toastify.js",
        onload: (ev) => {
            let e = document.createElement('script');
            e.innerText = ev.responseText;
            document.head.appendChild(e);
        }
    });

    // Load remote CSS
    const remoteCss = GM_getResourceText("REMOTE_CSS");
    GM_addStyle(remoteCss);

    //Toast
    var dryWaterToast = Toastify({
        text: "Ada yang kering nih! ",
        close: true
    })

    var lastPageToast = Toastify({
        text: "Sudah page terakhir :( ",
        close: true
    })

    var maxWater = 25,
        checkloop = true,
        prevPage = 0,
        backgroundElement;

    console.log("Loading...")

    var interval = setInterval(() => {
        var loadingGif = document.getElementsByClassName("loading-page");
        var capthaDialog = document.getElementsByClassName("v-dialog__content v-dialog__content--active");
        var bodyElement = document.getElementById("__layout").children[0].children[1].children[0];

        if (typeof (bodyElement) !== 'undefined') {
            if (bodyElement.className === "content-wrapper tw-bg-farm-mobile sm:tw-bg-farm-desktop tw-p-2") {
                if (loadingGif.length === 0) {
                    if (capthaDialog.length === 0) {
                        var curPage = document.getElementsByClassName("currentPage tw-mr-2")[0];
                        if (typeof (curPage) !== 'undefined')
                            curPage = curPage.innerText;

                        var maxPage = document.getElementsByClassName("text tw-mr-2")[1];
                        if (typeof (maxPage) !== 'undefined') {
                            maxPage = maxPage.innerText.match(/\d+/g);
                            maxPage = maxPage[0];
                        }

                        if (curPage != prevPage) {
                            var revertElement = document.getElementsByClassName("tw-p-3");
                            for (let i = 0; i < revertElement.length; i++) {
                                if (revertElement[i].style.backgroundColor == "red") {
                                    revertElement[i].style.backgroundColor = "#151721";
                                }
                                prevPage = prevPage++;
                            }
                        }

                        var validCount = 0;
                        var waterParent = document.getElementsByClassName("tw-absolute tool-icon");
                        for (let i = 0; i < waterParent.length; i++) {
                            if (waterParent[i].src === "https://marketplace.plantvsundead.com/_nuxt/img/water@3x.d5ca50d.png") {
                                console.log(waterParent[i].parentElement.children[2].innerText)
                                if (waterParent[i].parentElement.children[2].innerText < maxWater) {
                                    validCount++
                                    backgroundElement = waterParent[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                    waterParent[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "red";
                                    if (checkloop) {
                                        waterParent[i].parentNode.parentNode.parentNode.parentNode.parentNode.scrollIntoView({
                                            block: 'end',
                                            behavior: 'smooth'
                                        });
                                        checkloop = false;
                                    }
                                }
                            }
                        }

                        console.log("Current Page: " + (typeof (curPage) === 'undefined' ? 1 : curPage))
                        console.log("Total Page: " + (typeof (maxPage) === 'undefined' ? 1 : maxPage))
                        if (curPage == maxPage) {
                            if (validCount > 0) {
                                dryWaterToast.showToast();
                                console.log("Ada yang kering nih");
                            }

                            lastPageToast.showToast();
                            console.log("Sudah page terakhir");
                            clearInterval(interval);
                        } else if (validCount === 0) {
                            if (capthaDialog.length === 0) {
                                document.querySelectorAll('.tw-mt-6')[1].children[4].click();
                                prevPage = curPage;
                                checkloop = true;
                            }
                        } else {
                            dryWaterToast.showToast();
                            console.log("Ada yang kering nih");
                        }
                    }
                }
            }
        }
    }, 2000);
})();
`