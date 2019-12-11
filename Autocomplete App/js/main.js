const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search states.json And Filter
const searchStates = async searchText => {
    const resolve = await fetch("../data/states.json");
    const states = await resolve.json();

    //console.log(states);
    // Get Matches To Current Text Inputs For States.
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return state.name.match(regex) || state.abbr.match(regex);
    });

    // Clearing Out Json Objects When Backslahing Texts From States Search Box Area.
    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }

    //console.log(matches);
    // Showing Results For Searched Text
    outputHTML(matches);
};

// Show Results In HTML
const outputHTML = matches => {
    if(matches.length > 0) {
        const HTML = 
        matches.map(match => `
          <div class="card card-body mb-1">
            <h4>${match.name} (${match.abbr}) 
            <span class="text-primary">${match.capital}
            </span></h4>
            <small>Lat : ${match.lat}  /  Long: ${match.long}</small>
          </div>
        `).join("");

        //console.log(HTML);
        matchList.innerHTML = HTML;
    }
}


search.addEventListener("input", () => searchStates(search.value));

