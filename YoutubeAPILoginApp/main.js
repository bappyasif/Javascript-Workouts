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

    // Get Cahnnel From API
    function getChannel(channel) {
        console.log(channel);
    }