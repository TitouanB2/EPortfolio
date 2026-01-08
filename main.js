
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

const experienceSelect = document.getElementById("language-select");
experienceSelect.addEventListener("change", function () {
    const selectedExperience = this.value;
    if(selectedExperience == 'ep')
    {
        window.location.href = `experienceProfessionelle.html`;
    }
    else if(selectedExperience == 'sp')
    {
        window.location.href = `stages.html`;
    }
    else
    {
        window.location.href = `${selectedExperience}.html`;
    }
});