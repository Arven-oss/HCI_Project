document.addEventListener("DOMContentLoaded", function() {
    const updatesList = document.getElementById("updates-list");
    if (!updatesList) {
        console.error("The updates list element was not found in the DOM.");
        return; 
    }

    const updates = [
        { 
            title: "PlayStation News", 
            link: "https://blog.playstation.com", 
            image: "EaAf9y1VAAAorkp.jpg"
        },
        { 
            title: "Xbox News", 
            link: "https://news.xbox.com/en-us/", 
            image: "gfix-031125-blogroll-1741731095302.jpg"
        },
        { 
            title: "Nintendo News", 
            link: "https://www.nintendo.com/us/whatsnew/", 
            image: "nintendoswitch2-asset2-20250117011734488.jpg"
        }
    ];

    let currentIndex = 0; 
    function displayCurrentUpdate() {
        updatesList.innerHTML = ""; 
        const update = updates[currentIndex]; 
        const listItem = createListItem(update.link, update.image); 
        updatesList.appendChild(listItem);
    }

    function createListItem(link, image) {
        const listItem = document.createElement("li");
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.target = "_blank"; 
        const imgElement = document.createElement("img");
        imgElement.src = image; 
        imgElement.alt = "Update Image"; 
        imgElement.style.width = "1000px"; 
        imgElement.style.height = "auto"; 
        linkElement.appendChild(imgElement);
        listItem.appendChild(linkElement); 
        return listItem;
    }

    function changeUpdate() {
        currentIndex = (currentIndex + 1) % updates.length; 
        displayCurrentUpdate(); 
    }

    displayCurrentUpdate();
    setInterval(changeUpdate, 3000); 


    const images = [
        '1.jpg',
        '2.jpg',
        '3.gif',
        '4.gif',
        '5.png',
        '6.gif',
    ];

    let backgroundIndex = 0;

    function changeBackground() {
        const backgroundSlider = document.querySelector('.hero-section'); 
        backgroundIndex = (backgroundIndex + 1) % images.length; // Loop back to the first image
        backgroundSlider.style.backgroundImage = `url('${images[backgroundIndex]}')`;
    }

    setInterval(changeBackground, 3000);
});
