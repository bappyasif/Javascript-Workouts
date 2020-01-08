// Tyoe parcel index.html In console Terminal To Get Parcel Loaded With Our index.html File

export default {
    search: function(searchTerm, searchLimit, sortBy) {
        //console.log("Search Contents");
        fetch(`http://www.reddit.com/search.json?q=${searchTerm}&${sortBy}&${searchLimit}`)
        .then(response => response.json())
        .then(data => console.log(data));
    }
};