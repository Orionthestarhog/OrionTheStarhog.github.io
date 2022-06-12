let channelXml = String('https://www.youtube.com/feeds/videos.xml?channel_id=');
let requestHost = String('https://api.rss2json.com/v1/api.json?rss_url=');
let channelId = String('UCXL-FoahKmR-wdGdv2fXOeQ');
let embedUrl = String('https://youtube.com/embed/{0}?controls=1');

let requestUrl = (requestHost + encodeURIComponent(channelXml)) + channelId;

let iframeList = document.getElementsByClassName('latestVideos');

function loadYouTubeVideo(iframe, id) {
    $.getJSON(requestUrl, function(data) {
        let videoLink = data.items[id].link;
        console.log(data.items[id]);
        let videoId = videoLink.substr(videoLink.indexOf('=') + 1);
        iframe.setAttribute('src', embedUrl.replace('{0}', videoId));
    })
}
for(let i = 0; i < iframeList.length; i++) {
    loadYouTubeVideo(iframeList[i], i);
}