//what
const library = {
       tracks: {
         t01: {
           id: "t01",
           name: "Code Monkey",
           artist: "Jonathan Coulton",
           album: "Thing a Week Three"
         },
         t02: {
           id: "t02",
           name: "Model View Controller",
           artist: "James Dempsey",
           album: "WWDC 2003"
         },
         t03: {
           id: "t03",
           name: "Four Thirty-Three",
           artist: "John Cage",
           album: "Woodstock 1952"
         }
       },
       playlists: {
         p01: {
           id: "p01",
           name: "Coding Music",
           tracks: ["t01", "t02"]
         },
         p02: {
           id: "p02",
           name: "Other Playlist",
           tracks: ["t03"]
         }
       },
       printTrack: function(id) {
         let currTrack = this["tracks"][id];
         let name = currTrack["name"];
         let artist = currTrack["artist"];
         let album = currTrack["album"];
          
         console.log(`${id}: ${name} by ${artist} (${album})`);
       },
       printPlaylistGeneral: function(id) {
         let currPlaylist = this["playlists"][id];
         let name = currPlaylist["name"];
         let tracks = currPlaylist["tracks"];
          
         console.log(`${id}: ${name} - ${tracks.length} tracks`);
       },
       printPlaylists: function() {
         for (let playlist of Object.keys(this['playlists'])) {
           this.printPlaylistGeneral(playlist);
         }
       },
       printTracks: function() {
         for (let track of Object.keys(this["tracks"])) {
           this.printTrack(track);
         }
       },
       printPlaylist: function(playlistId) {
         this.printPlaylistGeneral(playlistId);
         for (let track of this["playlists"][playlistId]["tracks"]) {
           this.printTrack(track);
         }
       },
       addTrackToPlaylist: function(trackId, playlistId) {
         this["playlists"][playlistId]["tracks"].push(trackId);
       },
       generateUid: function() {
         return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       addTrack: function(name, artist, album) {
         let newId = `t${this.generateUid()}`;
         let newTrack = {
           id: newId,
           name,
           artist,
           album
         };
       
         this["tracks"][newId] = newTrack;
       },
       addPlaylist: function(name) {
         let newId = `p${this.generateUid()}`;
         let newPlaylist = {
           id: newId,
           name,
           tracks: []
         };
       
         this["playlists"][newId] = newPlaylist;
       },
       printSearchResults: function(query) {
         let result = {};
       
         for (let tr of Object.keys(this["tracks"])) {
           let track = library["tracks"][tr];
           if (track["name"].search(query) >= 0
          || track["artist"].search(query) >= 0
          || track["album"].search(query) >= 0) {
             result[tr] = this["tracks"][tr];
           }
         }
       
         console.log(result);
       }
     };
     
     
     library.printPlaylists();
     library.printTracks();
     library.printPlaylist("p01");
     library.addTrackToPlaylist('t03', 'p01');
     library.printPlaylist('p01');
     library.addTrack("tamari almonds", "chubacobras", "tigers only dance at night");
     library.printTracks();
     library.addPlaylist("bad mamajamba'ing");
     library.printPlaylists();
     library.printSearchResults("o");