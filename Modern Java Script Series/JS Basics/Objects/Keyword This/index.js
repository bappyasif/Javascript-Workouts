console.log("This Keyword");

// Method -> obj

const videoObject = {
  title: "Video Entertainmemt",
  play() {
    console.log(this);
  }
};

videoObject.stop = function() {
  console.log(this);
};

videoObject.stop();

// function -> global (window, global)
function playVideo() {
  console.log(this);
}

playVideo();

function VideoConstructor(title) {
  this.videoTitle = title;
  console.log(this);
}

const newVideo = new VideoConstructor("New Video");

const anotherVideo = {
  title: "Another Video",
  tags: ["recent", "new", "top", "most"],
  showTags() {
    this.tags.forEach(function(tag) {
      //console.log(tag);
      //console.log(this.title, tag);
      console.log(this, tag);
    });
  },
  showTagsWithThis() {
    this.tags.forEach(function(tag) {
      console.log(this, tag);
      console.log(this.title, tag);
    }, this);
  }
};

anotherVideo.showTags();
anotherVideo.showTagsWithThis();
