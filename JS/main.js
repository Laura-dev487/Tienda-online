import { servicesProducts } from "./product-services.js";

const productContainer = document.querySelector("[data-product]");
const loadMoreButton = document.querySelector("[data-load-more]");
const form = document.querySelector("[data-form]");


// Estado para la cantidad de productos mostrados
let productsShown = 6;
const productsPerLoad = 4; // Número de productos a cargar por clic


//crea una estructura HTML para renderizarla dinamicamente con javascript//

function createCard({name,price,image,id}){
    const card =document.createElement("div");
    card.classList.add("card");
    card.innerHTML =`
       <div class="card">
                    <img src="${image}" alt="imagen producto"  >
                </div>
                <div class="card-container-info">
                    <p>${name}</p>
                    <div class="card-container-value">
                        <p>${price}</p>
                        <button class="delete-button" data-id="${id}">
                            <img src="./assets/borrar.png" alt="eliminar">
                        </button>
                    </div>
                </div>
            </div>  
    `; 

  // Asigna el evento de eliminación
  addDeleteEvent(card, id);

    return card;
};

// Asigna el evento de eliminar producto a la tarjeta
function addDeleteEvent(card, id) {
    const deleteButton = card.querySelector(".delete-button");
    deleteButton.addEventListener("click", async () => {
      try {
        await servicesProducts.deleteProduct(id);
        card.remove();
        console.log(`Producto con id ${id} eliminado`);
      } catch (error) {
        console.error(`Error al eliminar el producto con id ${id}:`, error);
      }
    });
  }


// Renderiza los productos en el DOM
const renderProducts = async (limit) => {
    try {
        const listProducts = await servicesProducts.productList();
        const productsToShow = listProducts.slice(0, limit); // Muestra solo hasta el límite actual

        productContainer.innerHTML = ""; // Limpia el contenedor antes de renderizar
        productsToShow.forEach((product) => {
            const productCard = createCard(product);
            productContainer.appendChild(productCard);
        });

        // Oculta el botón "Ver más" si ya se mostraron todos los productos
        if (productsShown >= listProducts.length) {
            loadMoreButton.style.display = "none";
        }
    } catch (error) {
        console.log(error);
    }
};

// Evento para el botón "Ver más"
loadMoreButton.addEventListener("click", () => {
    productsShown += productsPerLoad;
    renderProducts(productsShown); 
});

// Renderiza los productos iniciales
renderProducts(productsShown);



    form.addEventListener("submit" , async (event) => {
    event.preventDefault();

    const name =document.querySelector("[data-name]").value;
    const price =document.querySelector("[data-price]").value;
    const image =document.querySelector("[data-image]").value;

    if (name === "" || price === "" || image === "") {
        alert("Por favor, complete todos los campos");
      } else {
        try {
          const newProduct = await servicesProducts.createProduct(
            name,
            price,
            image
          );
          console.log("Producto creado:", newProduct);
          const newCard = createCard(newProduct);
          productsContainer.appendChild(newCard);
        } catch (error) {
          console.error("Error al crear el producto:", error);
        }
    
        form.reset(); // Reinicia el formulario
      }
    });
    
 
    



