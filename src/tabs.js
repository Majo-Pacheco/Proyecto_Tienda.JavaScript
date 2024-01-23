export default class Tabs {
    constructor (idElemento) {
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector(".tabs");

        this.nav.addEventListener("click", (e) => {
            // Compruebo que el elemento que clickeo tenga la clase tabs__button
             if([...e.target.classList].includes("tabs__button")) {
                
                // Obtengo la tab que quiero mostrar
                const tab = e.target.dataset.tab;
                
                //Elimino la clase active de las tabs que la tengan
                if(this.tabs.querySelector(".tab--active")){
                    this.tabs.querySelector(".tab--active").classList.remove("tab--active")
                }

                //Elimino la clase active de los botones que la tengan
                if(this.tabs.querySelector(".tabs__button--active")){
                    this.tabs.querySelector(".tabs__button--active").classList.remove("tabs__button--active")
                }

                //Agrego la clase active a la tab
                this.tabs.querySelector(`#${tab}`).classList.add("tab--active")

                //Agregamos la clase active al boton
                e.target.classList.add("tabs__button--active")
             }
        })
    }
}