const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging") 
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        //console.log("Drag Over")
    })
    seccion.addEventListener("drop", event => {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(papelera => {
    papelera.addEventListener("dragover", event => {
        event.preventDefault()
    })
    papelera.addEventListener("drop", event => {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})