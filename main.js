
function create(tag, container, text = null){
    let element = document.createElement(tag)
    if (text)
        element.innerHTML = text
    container.appendChild(element)
    return element
}

const body = document.querySelector("body")


document.querySelectorAll(".lightbox").forEach(function(image){

    image.addEventListener("click", function(){
      let bg = create("div",body)
    bg.id = "bg"  

    let box = create("div", bg)
    box.id= "box"

    let newimage = create("img", box)
    newimage.src = image.src

    let closebutton = create("div", box, "❌")
    closebutton.id ="close"

    function remove(){
        box.classList.add("out")
        setTimeout(function(){
        bg.remove()
    },800)
    }

    closebutton.addEventListener("click", function(){
        remove()
    })
    box.addEventListener("click", function(event){
        event.stopPropagation()
    })
    bg.addEventListener("click",function(event){
        remove()
    })
    body.addEventListener("keyup", function(event){
        if(event.key=="Escape")
            remove()
    })


    })
    

})

const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    if(selectedLanguage == 'en')
    {
        window.location.href = `index.html`;
    }
    else
    {
        window.location.href = `${selectedLanguage}.html`;
    }
});