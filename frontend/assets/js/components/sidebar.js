import { CreateMain } from "./main"

export const SideBar = () => {
    const $sidebar = `
        <section class="sidebar d-none d-sm-block bg-warning vh-100" id="sidebar" style="width: 175px; position: fixed; left: 0;"> 
            <nav>
                <h1>Menu</h1>
                <div class="list-group">
                    <a href="#home" class="nav-link list-group-item list-group-item-warning list-group-item-action">Home</a>
                    <a href="#catalogo" class="nav-link list-group-item list-group-item-warning list-group-item-action">Catálogo de Brinquedos</a>
                    <a href="#admin" class="nav-link list-group-item list-group-item-warning list-group-item-action">Administração</a>    
                    <a href="#about" class="nav-link list-group-item list-group-item-warning list-group-item-action">Sobre a Equipe</a>
                </div>
            </nav>
        </section>
    `;

    const main = CreateMain();
    main.insertAdjacentHTML('afterbegin', $sidebar);

    if (typeof window !== 'undefined') { 
        const navLinks = document.querySelectorAll('.nav-link');
        const activeClass = 'active'; 

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.nav-link.active').forEach(activeLink => {
                    activeLink.classList.remove(activeClass);
                });
                this.classList.add(activeClass);
                localStorage.setItem('activeNavLinkId', this.getAttribute('href'));
            });
        });

        const savedNavLinkId = localStorage.getItem('activeNavLinkId');
        if (savedNavLinkId) {
            const activeLink = document.querySelector(`[href="${savedNavLinkId}"]`);
            if (activeLink) {
                activeLink.classList.add(activeClass);
            } else if (navLinks.length > 0) {
                navLinks[0].classList.add(activeClass);
                localStorage.setItem('activeNavLinkId', navLinks[0].getAttribute('href'));
            }
        } else if (navLinks.length > 0) {
            navLinks[0].classList.add(activeClass);
            localStorage.setItem('activeNavLinkId', navLinks[0].getAttribute('href'));
        }
    }
}
