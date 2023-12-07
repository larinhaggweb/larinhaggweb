// youtube-api.js

function onYouTubeApiLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoaded);
}

function onYouTubeApiLoaded() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        channelId: 'AIzaSyBZMw8HBbCNNyu5vi7xcW6O0sRj5cmvRX4',
        order: 'date',
        maxResults: 5,
    });

    request.execute(function(response) {
        var videos = response.result.items;

        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            var videoTitle = video.snippet.title;
            var videoDescription = video.snippet.description;
            var videoThumbnail = video.snippet.thumbnails.medium.url;

            var videoContainer = document.createElement('div');
            var videoThumbnailElement = document.createElement('img');
            videoThumbnailElement.src = videoThumbnail;

            var videoLinkElement = document.createElement('a');
            // Use um marcador de posição (#) como href para agora
            videoLinkElement.href = '#';

            videoLinkElement.appendChild(videoThumbnailElement);
            videoContainer.appendChild(videoLinkElement);

            document.getElementById('seuContainerDeVideos').appendChild(videoContainer);
        }
    });
}
