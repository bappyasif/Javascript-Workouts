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
}