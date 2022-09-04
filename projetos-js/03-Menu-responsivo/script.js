class menu_mobile{
    constructor(mobile_menu, menu_list, menu_list_links){
        this.mobile_menu = document.querySelector(mobile_menu) 
        this.menu_list = document.querySelector(menu_list)
        this.menu_list_links = document.querySelectorAll(menu_list_links)
        this.activeClass = "active"
        this.ativaclasse = this.ativaclasse.bind(this)
    }

    init(){
        if(this.mobile_menu){
            this.clicou()
        }
        return this
    }

    clicou(){
        this.mobile_menu.addEventListener('click', this.ativaclasse)
        console.log(1)
    }

    ativaclasse() {
        this.menu_list.classList.toggle(this.activeClass)
        this.mobile_menu.classList.toggle(this.activeeClass)
        console.log(2)
    }
}

const mobile = new menu_mobile(".mobile-menu", ".menu-list", ".menu-list li")
mobile.init()