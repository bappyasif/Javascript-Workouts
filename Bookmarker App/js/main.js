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

    if(!validationBookmarks(siteName, siteUrl)) {
        return false;
    }

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

        // Clear Form After Entry
        document.getElementById("myForm").reset();

        // Re-fetch All Saved Bookmarks
        fetchBookmarks();
    }

}

// Delete Bookmark
function deleteBookmark(url) {
    //console.log(url);
    // Get Bookmarks From LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Loop Through Bookmarks Elements
    for(var i = 0; i<bookmarks.length; i++) {
        if(bookmarks[i].url == url) {
            // Remove From This Array
            bookmarks.splice(i,1);
        }
    }
     // Re-Set Back To LocalStorage
     localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

     // Re-fetch Bookmarks To Regenerate Updated Bookmarks  After Delte On Display
     fetchBookmarks();
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

        bookmarksResult.innerHTML += "<div class='well'>"+
                                     "<h3>"+name+"</h3>"+
                                     " <a class='btn btn-default' target='_blank' href='"+url+"'>Visit</a> "+
                                     " <a onclick='deleteBookmark(\""+url+"\")' class='btn btn-danger' href='#'>Delete</a>"+
                                     "</h3>"+
                                     "</div>";
    }
}

// Bookmarks Validation
function validationBookmarks(siteName, siteUrl) {
    // Empty Bookmarks Information Validation
    if(!siteName || !siteUrl) {
        alert("please Enter Required Informations");
        return false;
    }

    // URL Validation
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!siteUrl.match(regex)) {
        alert("Please Provide Valid Url");
        return false;
    }

    return true;
}