window.onload = function() {
    // Get the banner image element
    const bannerImage = document.getElementById('banner-image');

    // Create an image object
    const img = new Image();
    img.src = bannerImage.src;

    // Once the image is loaded, get its dominant color
    img.onload = function() {
        const color = getDominantColor(img);
        document.body.style.backgroundColor = color;
    };
};

// Function to get the dominant color from an image
function getDominantColor(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    // Calculate the average color of the image
    let red = 0, green = 0, blue = 0;
    for (let i = 0; i < imageData.length; i += 4) {
        red += imageData[i];
        green += imageData[i + 1];
        blue += imageData[i + 2];
    }
    const totalPixels = img.width * img.height;
    red = Math.floor(red / totalPixels);
    green = Math.floor(green / totalPixels);
    blue = Math.floor(blue / totalPixels);

    return `rgb(${red}, ${green}, ${blue})`;
}
