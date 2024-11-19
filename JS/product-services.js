const BASE_URL ="http://localhost:3001/Products";

const productList = async () => {
    try{
        const response = await fetch (BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error al listar productos:", error)
    }
};

const createProduct = async ( name,price,image) => {
    try{
        const response =await fetch(BASE_URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,price,image})
        });
        const data = await response.json();
        return data;
    } catch (error){
        console.log("Error al crear productos: ",error)
    }
}


const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`Producto con id ${id} eliminado exitosamente`);
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
    }
  };



export const servicesProducts ={
    productList,
    createProduct,
    deleteProduct,
};
