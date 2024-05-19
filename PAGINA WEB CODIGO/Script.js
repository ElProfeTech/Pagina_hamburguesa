const btn_menu = document.getElementById("menu-hamburguesa")

const menu_enlaces = document.getElementById("menu-enlaces")

const listado_menu = document.querySelectorAll("a")

btn_menu.addEventListener("click", () => {

    menu_enlaces.classList.toggle("mostrar-menu")





})

listado_menu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu_enlaces.classList.remove("mostrar-menu")
    })



});


function irrarriba(pxPantalla) {
    window.addEventListener("scroll", () => {
        let scroll = document.documentElement.scrollTop;
        let botonarriba = document.getElementById("btnarriba");

        if (scroll > pxPantalla) {
            botonarriba.style.right = "20px";
        } else {
            botonarriba.style.right = "-100px";
        }
    });

    let botonarriba = document.getElementById("btnarriba");
    botonarriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            
        });
    });
}

irrarriba(500);

