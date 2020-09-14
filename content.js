chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // const re = new RegExp('bear', 'gi')
    // const matches = document.documentElement.innerHTML.match(re)
    var ids = document.querySelectorAll('[id]');

    Array.prototype.forEach.call(ids, function (el, i) {
        // "el" is your element
        // console.log(el.id); // log the ID
        console.log(document.getElementById(el.id).textContent.trim())

    });


    // sendResponse({ count: matches.length })
})