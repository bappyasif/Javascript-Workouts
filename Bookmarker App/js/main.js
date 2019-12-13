//alert("Bingo!!");
// Listen For Form Submit
document.getElementById("myForm").addEventListener("submit", saveBookmark);

function saveBookmark(event) {
    // Prevent From From Submitting
    event.preventDefault();

    // Get Values From Form
    var siteName = document.getElementById("siteName").value;
    console.log(siteName);
    var siteUrl = document.getElementById("siteUrl").value;
    console.log(siteUrl);
    //console.log("It Worrks!!");

    // Bookmarked Objct
    var bookmarkSaved = {
        name: siteName,
        url: siteUrl
    }
    console.log(bookmarkSaved);

    // Local Storage
    // localStorage.setItem("test", "Hello World!!");
    // console.log(localStorage.getItem("test"));
    // localStorage.removeItem("test");
    // console.log(localStorage.getItem("test"));

    //localStorage.removeItem("bookmarks");
    // Checks Bookmarks If Null
    if(localStorage.getItem("bookmarks") === null) {
        // Init Array
        var bookmarks = [];

        // Add Elements To Array
        bookmarks.push(bookmarkSaved);

        // Save To Local Storage 
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
        // Extract From Local Storage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        // Add Bookmarks To Array
        bookmarks.push(bookmarkSaved);

        // Save To Local Storage
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

}

// Fetch Bookmarks
function fetchBookmarks() {
    // Retrieve From Local Storage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //console.log(bookmarks);

    // Get Bookmarks Result Displayed
    var bookmarksResult = document.getElementById("bookmarksResults");

    // Building Output
    bookmarksResult.innerHTML = "";
    for(var i = 0; i< bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResult.innerHTML += name;
    }
}