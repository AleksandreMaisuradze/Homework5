
let mainDiv = document.getElementById("main")
let wrapper = document.createElement("div")
let img = document.createElement("img")
let text = document.createElement("h2")
img.src = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
img.alt = "image"
img.style.width = "700px"
text.textContent = "image title"
text.classList.add("title")
text.style.color = "red"
text.style.fontSize = "30px"
mainDiv.appendChild(wrapper)
wrapper.appendChild(img)
wrapper.appendChild(text)

// 1
console.log('///1///');
let textt = document.querySelectorAll(".textt")
textt.forEach((texttt) => {
    let p = document.createElement("p")
    p.textContent = "hello"
    texttt.appendChild(p)
});

//2
console.log('///2///');
let link = document.createElement("a")
link.textContent = "google link"
link.href = "https://google.com"
link.target = "_blank"
link.classList.add("link")
link.classList.replace("link", "newclass")
let box = document.querySelector(".box")
box.appendChild(link)
