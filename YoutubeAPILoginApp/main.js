// Oauth Options
const CLIENT_ID = "";

const DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
  ];
  const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
  
  const authorizeButton = document.getElementById('authorize-button');
  const signoutButton = document.getElementById('signout-button');

  const content = document.getElementById('content');
  const channelForm = document.getElementById('channel-form');
  const channelInput = document.getElementById('channel-input');
  const videoContainer = document.getElementById('video-container');
  
  const defaultChannel = 'techguyweb';

  
  // Form Submit & Change Channel 
  channelForm.addEventListener("submit", event => {
      event.preventDefault();

      const channel = channelInput.value;

      getChannel();
  });


  // Load Auth2 Library Function
  function handleClientLoad() {
      gapi.load("client:auth2", initClient);
  }

  // Init API Client Library And Set Up Sign In Listeners
  function initClient() {
      gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientID: CLIENT_ID,
          scope: SCOPES
      }).then(() => {
          // Listen for sign in state changes
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          // Handle initial sign in state
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
      });
  }

  // Update UI Sign In State Changes
  function updatedSinginStatus(isSignedIn) {
      if(isSignedIn) {
          authorizeButton.style.display = "none";
          signoutButton.style.display = "block";
          content.style.display = "block";
          //authorizeButton.style.display = "none";
          videoContainer.style.display = "block";
          
          getChannel(defaultChannel);

      } else {
        authorizeButton.style.display = "block";
        signoutButton.style.display = "none";
        content.style.display = "none";
        //authorizeButton.style.display = "none";
        videoContainer.style.display = "none";
      }
  }

  // Handle Login
  function handleAuthClick() {
      gapi.auth2.getAuthInstance().signIn();
  }

    // Handle Logout
    function handleSignoutClick() {
        gapi.auth2.getAuthInstance().signOut();
    }

    // Display Channel Content Data
    function showChannelData(data) {
        const channelData = document.getElementById("channel-data");
        channelData.innerHTML = data;
    }

    // Get Cahnnel From API
    function getChannel(channel) {
        //console.log(channel);
        gapi.client.youtube.channels.list({
            part:"snippet, contentDetails, statistics",
            forUsername: channel
        }).then(response => {
            console.log(response);
            const channel = response.result.items[0];

            const output_div = `
                <ul class="collection">
                    <li class="collection-item">Title : ${channel.snippet.title}</li>
                    <li class="collection-item">ID : ${channel.id}</li>
                    <li class="collection-item">Subscribers : ${numberWithCommas(channel.statistics.subscriberCount)}</li>
                    <li class="collection-item">Views : ${numberWithCommas(channel.statistics.viewCount)}</li>
                    <li class="collection-item">Videos : ${numberWithCommas(channel.statistics.videoCount)}</li>
                </ul>
                <p>${channel.snippet.description}</p>
                <hr>
                <a class="btn grey darken-2" target="_blank" href="https://youtube.com/
                ${channel.snippet.customUrl}">Visit Channel</a>
            `;

            showChannelData();

            const playlistID = channel.contentDetails.relatedPlaylists.uploads;
            requestVideoPlaylist(playlistID);

        }).catch(error => alert("No Channel Was Found"));
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function requestVideoPlaylist(playlistId) {
        const requestOptions = {
            playlistId: playlistId,
            part:"snippet",
            maxResults: 10
        }

        const request = gapi.client.youtube.playlistItems.list(requestOptions);
        request.execute(response => {
            console.log(response);

            const pplaylistItems = response.result.items;
            if(playlistItems) {
                let output = "<br><h4 class='align-center'>Latest Videos</h4>";
                // Loop Through Videos And Append Output
                playlistItems.forEach(item => {
                    const videoID = item.snippet.resourceId.videoID;
                    output += `
                        <div class="col s3">
                            <iframe width="100%" height="auto" 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" allow="autoplay; encrypted-media" 
                            allowfullscreen></iframe>
                        </div>
                    `;
                });
                // Output Videos
                videoContainer.innerHTML = output;
            } else {
                videoContainer.innerHTML = "No Uploaded Videos Found";
            }
        });
    }