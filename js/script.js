let fotos = document.querySelectorAll(".item__imagem")

for (let i = 0; i < fotos.length; i++) {
    fotos[i].addEventListener("click", function() {
        if (fotos[i].classList.contains("remove")) {
            fotos[i].classList.remove("remove")
        } else {
            fotos[i].classList.add("remove")
        }
    })
}