// Type parcel index.html In console Terminal To Get Parcel Loaded With Our index.html File

export default {
    search: function(searchTerm, searchLimit, sortBy) {
        //console.log("Search Contents");
        return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&${sortBy}&${searchLimit}`)
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(data => data.data.children.map(data => data.data))
        .catch(error => console.log(error));
        
    }
};

/*
.then(data => data.data.children.map(data => data.data))
        .catch(error => console.log(error)); */