 // Example: Dynamically update the download link (if needed)
 const imageUrl = "DHATIR .png"; // Replace with the actual image URL
 const downloadLink = document.getElementById("downloadLink");
 const generatedImage = document.getElementById("generatedImage");

 // Update the link href dynamically
 downloadLink.href = imageUrl;
 generatedImage.src = imageUrl;