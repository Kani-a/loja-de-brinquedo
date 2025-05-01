import { CreateMain } from "./main"

export const SideBar=()=>{
    const $sidebar =`
    
    
    <section class="sidebar p-2 d-none d-sm-flex text-center" id="sidebar">
        
        <nav class="sticky-top">
            
        <h2>menu principal</h2>

            
            <ul class="navbar-nav d-flex ">
                <li class="list-group-item">
                    <a href="#home">
                        home
                    </a>
                </li>
                <li>
                    <a href="#catalogo">
                        catálogo 
                    </a>
                </li>
                <li>
                    <a href="#adhemin">
                        adiministração
                    </a>    
                </li>
                    
                <li>
                    <a href="#about">
                        sobre a equipe
                    </a>
                </li>
            </ul>
        </nav>
    </section>

   
    `
    const main = CreateMain();
    main.insertAdjacentHTML('afterbegin',$sidebar)
}