import { CreateMain } from "../components/main";

import placeholder from "../../media/pistatubarao.jpg"
import placeholder2 from "../../media/ben10pika.jpg"
import placeholder3 from "../../media/jabolo.jpg";


const img3 = placeholder3
const img2 = placeholder2
const img1 = placeholder;
export const homePage=()=>{
    const $homeHTML=`
    
    
        <section>
            <h2>Brinquedos em destaque</h2>
            <ul class="row row-cols-1 row-cols-sm-3 row-cols-md-4 ">

                <li class="list-group-item col ">
                    <a href="#brinquedo" >
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="text-center">
                        dedscriçao
                        <p>preço</p>
                        
                        </p>
                        
                    </a>
                </li>
                
                 <li class="list-group-item col">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="d-flex ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>

                 <li class="list-group-item col">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="d-flex ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>
                 <li class="list-group-item col">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="d-flex ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>
                
                 <li class="list-group-item col">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="d-flex ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>
                
                 <li class="list-group-item col">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p class="d-flex ">dedscriçao</p>
                        <p>preço</p>
                    </a>
                </li>
            </ul>
        </section>
    `
    const main = CreateMain();
    main.classList = "d-flex  h-100hv"
    main.insertAdjacentHTML('beforeend',$homeHTML);

}