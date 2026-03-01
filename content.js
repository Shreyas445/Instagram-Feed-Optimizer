// List of keywords related to cooking videos
const blockedKeywords = ["cooking", "recipe", "food", "baking", "kitchen", "chef", "meal", "dish"];

// Function to check if a video title contains blocked keywords
function isCookingVideo(title) {
    return blockedKeywords.some(keyword => title.toLowerCase().includes(keyword));
}

// Function to hide unwanted videos
function filterVideos() {
    let videos = document.querySelectorAll("#video-title");

    videos.forEach(video => {
        let title = video.innerText || video.textContent;
        let videoContainer = video.closest("ytd-rich-item-renderer") || video.closest("ytd-video-renderer");

        if (videoContainer && isCookingVideo(title)) {
            videoContainer.style.display = "none"; // Hide the video
        }
    });
}

// Run filterVideos initially and observe changes in the YouTube feed
const observer = new MutationObserver(filterVideos);
observer.observe(document.body, { childList: true, subtree: true });

console.log("YouTube Cooking Filter is active!");
