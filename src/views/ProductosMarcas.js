import { useContext, useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import "./Css/producto.css";

import Carga from "./Carga";

import { useAuthContext } from "../Context/AuthContext";

export default function ProductosMarcas() {
  const { auth } = useAuthContext();
  function addCart(name, price, imageUrl) {
    let http = new XMLHttpRequest();
    let talla = prompt("Escoge tu talla");
    let cantidad = prompt("Escoge la cantidad");
    let datos = {
      producto: name,
      precio: price,
      imagen: imageUrl,
      talla: talla,
      cantidad: cantidad,
      id_usuario: auth.id,
    };
    http.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
      }
      /* if (
        this.responseText ===
        `err:ER_DUP_ENTRY: Duplicate entry '${user.email}' for key 'correo_UNIQUE'`
      ) {
        setErrorR("Error, email duplicado");
      } else {
        setErrorR("");
      }*/
    };

    http.open("POST", "http://localhost:8080/insertCart", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify(datos));
  }

  /* const [articulo, setArticulo] = useState({
    nombre: "",
    precio: "",
    imagen: "",
  });
  const { add } = useCarritoContext();
  function handleArticulo(name, price, img) {
    setArticulo({ nombre: name, precio: price, imagen: img });
    add(articulo);
  } */
  const { id } = useParams();
  const [productosMarcas, setProductosMarcas] = useState(null);
  useEffect(
    function () {
      async function data() {
        let response = await fetch(
          `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${id}&currency=USD&sizeSchema=US&lang=en-US`,
          {
            headers: {
              "X-RapidAPI-Host": "asos2.p.rapidapi.com",
              "X-RapidAPI-Key":
                "d7f5227f5emsh7d4008f70be6bf5p1eae5ajsn2eb04ce3c390",
            },
          }
        );
        let json = await response.json();
        json = json.products;

        setProductosMarcas(json);
        console.log(productosMarcas);
      }
      data();
    },
    [id]
  );
  if (!productosMarcas) {
    return <Carga />;
  }

  return (
    <div className="container">
      <div className="row">
        {productosMarcas.map((marca) => (
          <div className=" my-3  col-sm-6  ">
            <div class="shop-card">
              <div class="title">{marca.name}</div>
              <div class="desc">{marca.brandName}</div>
              <div class="slider">
                <figure data-color="#E24938, #A30F22">
                  <img className="img1" src={"https://" + marca.imageUrl} />
                </figure>
              </div>

              <div class="cta">
                <div class="price">{marca.price.current.value + "€"}</div>
                <button className="btn3 ">
                  <Link to={`/producto/${marca.id}`}>Mas detalles</Link>
                </button>

                <button
                  class="btn2 "
                  onClick={() =>
                    addCart(
                      marca.name,
                      marca.price.current.value,
                      marca.imageUrl
                    )
                  }
                >
                  Add to cart<span class="bg"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
        {/*<Pagination
          totalRecords={48}
          pageLimit={5}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
                ></Pagination>*/}
      </div>
    </div>
  );
}
