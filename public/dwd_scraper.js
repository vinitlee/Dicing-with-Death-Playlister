// Define your XPath expression
const xpathExpression = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-browse[3]/ytd-two-column-browse-results-renderer/div[1]/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-playlist-video-list-renderer//a[@id='video-title']";

// Evaluate the XPath expression
const result = document.evaluate(xpathExpression, document, null, XPathResult.ANY_TYPE, null);

// Initialize an array to store the extracted data
const videoDataArray = [];

// Iterate through the results
let node;
while ((node = result.iterateNext())) {
  // Extract the title and href attributes
  const title = node.getAttribute("title");
  const href = node.getAttribute("href");

  // Extract the video ID from the href
  const videoIdMatch = href.match(/v=([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : "";

  const episodeNum = videoDataArray.length + 1

  // Create an object with the extracted data and push it to the array
  const videoData = {
    title,
    num : episodeNum,
    url: `/watch?v=${videoId}&list=PLPV88C9y83a5Re442_4LlAY8sSKu4HVYE&index=${episodeNum}`,
  };

  videoDataArray.push(videoData);
}

// Now, videoDataArray contains the data from the selected <a> elements
console.log(videoDataArray);

// Assuming you have the videoDataArray

// Convert the videoDataArray to a JSON string
const json = JSON.stringify(videoDataArray, null, 2); // The null and 2 are for pretty-printing

// Create a Blob with the JSON data
const blob = new Blob([json], { type: 'application/json' });

// Create a URL for the Blob
const url = URL.createObjectURL(blob);

// Create a download link
const a = document.createElement('a');
a.href = url;
a.download = 'videoData.json'; // Set the desired file name

// Trigger a click event to initiate the download
a.click();

// Clean up by revoking the Blob URL
URL.revokeObjectURL(url);