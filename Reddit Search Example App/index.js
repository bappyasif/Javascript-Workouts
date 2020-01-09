//console.log("123");

import reddit_api from "./redditapi.js";

const search_form = document.getElementById("search-form");
const search_input = document.getElementById("search-input");

// Search Form Event Listener
search_form.addEventListener("submit", event => {
    //console.log(123);
    // Get Search Phrase Input
    const search_phrase = search_input.value;
    //console.log(search_phrase);

    // Get Sorted
    const sort_by = document.querySelector("input[name='sortby']:checked").value;
    //console.log(sort_by);

    // Get Limit
    const search_limit = document.getElementById("limit").value;
    //console.log(search_limit);

    // Check Input
    if(search_phrase === "") {
        // Show Message
        showMessage("Please Add Search Phrase", "alert-danger");
    }

    // Clear Input After Search
    search_input.value = "";

    // Search Reddit
    //reddit.search(search_phrase, search_limit, sort_by);
    //reddit_api.search(search_phrase, search_limit, sort_by);
    reddit_api.search(search_phrase, search_limit, sort_by)
    .then(results => {
        //console.log(results);
        let output_div = "<div class='card-columns'>";
        // Loop Through Posts Results
        results.forEach(post => {
            // Check For Image Tag
            let image_element = post.preview ? post.preview.images[0].source.url : 
            "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
            output_div += `
            <div class="card">
                <img src="${image_element}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${truncateTexts(post.selftext, 100)}</p>
                    <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
                    <hr>
                    <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                    <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
            </div>
            `;
        });
        output_div += '</div>'
        // Displaying Results
        document.getElementById("results").innerHTML = output_div;
    });
    //fetchAPI(search_phrase, search_limit, sort_by);


    event.preventDefault();
});

// // Fetch API
// function fetchAPI(Searchphrase, searchLimit, sortedBy) {
//     fetch(`http://wwww.reddit.com/search.json?q=${searchTerm}`)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

// Show Message
function showMessage(message, className) {
    // Create Alert Message Div
    const alert_div = document.createElement("div");
    // Add Classes
    alert_div.className = `alert ${className}`;
    // Add Text To Message
    alert_div.appendChild(document.createTextNode(message));
    // Get Parent Div Container
    const search_container = document.getElementById("search-container");
    // Get Container Search ID
    const search_element = document.getElementById("search");

    // Insert Message
    search_container.insertBefore(alert_div, search_element);

    // Timeout Alert
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
}

// Truncate Texts
function truncateTexts(text, limit) {
    const shotened_text = text.indexOf("", limit);

    if(shotened_text == -1) return text;

    return text.substring(0, shotened_text);
}