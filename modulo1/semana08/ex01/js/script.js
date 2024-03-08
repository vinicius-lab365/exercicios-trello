const titleElement = document.getElementById("title");

const changeBgColor = () => {
    titleElement.style.backgroundColor = 'red';
}

titleElement.addEventListener("mouseover", changeBgColor);
