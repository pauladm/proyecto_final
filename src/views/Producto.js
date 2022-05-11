import { useContext, useEffect, useState, useLocation } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

import "./Css/detalles.css";
import "./Css/producto.css";
export default function Producto() {
  const [productosMarcas, setProductosMarcas] = useState(null);
  const { id } = useParams();
  const { auth } = useAuthContext();
  function cruz() {
    document.getElementById(
      "eliminar"
    ).innerHTML = `<div id='cartel' class='alert alert-warning d-none alert-dismissible fade show' role='alert'> <strong>debes etsar registrado!</strong> '<button onClick=${cruz()} type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>`;
  }
  useEffect(
    function () {
      async function data() {
        let response = await fetch(
          `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
          {
            headers: {
              "X-RapidAPI-Host": "asos2.p.rapidapi.com",
              "X-RapidAPI-Key":
                "d7f5227f5emsh7d4008f70be6bf5p1eae5ajsn2eb04ce3c390",
            },
          }
        );
        let json = await response.json();

        setProductosMarcas(json);
        console.log(productosMarcas);
      }
      data();
    },
    [id]
  );

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
  if (!productosMarcas) {
    return <h1>cargandoo</h1>;
  }

  return (
    <div className="m-auto h-100 bg-primary w-100">
      <div className="left">
        <img
          className="img1"
          src={"https://" + productosMarcas.media.images[0].url}
        />
        <i className="fa fa-long-arrow-left"></i>
        <i className="fa fa-long-arrow-right"></i>
      </div>
      <div className="right">
        <div className="product-info">
          <div className="product-name">
            <h1 className="h11">Detalles del producto</h1>
            <i className="fa fa-search"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-shopping-cart"></i>
          </div>

          <div className="details">
            <h3 className="h33">Winter Collection</h3>
            <h2 className="h22">Men Black Sneakers</h2>
            <h4 className="h44">
              <span className="fa fa-dollar"></span>150
            </h4>
            <h4 className="dis">
              <span className="fa fa-dollar"></span>200
            </h4>
          </div>
          <ul className="ull">
            <li className="lii">SIZE</li>
            <li className="bgg lii">7</li>
            <li className="bgg lii">8</li>
            <li className="bgg lii">9</li>
            <li className="bgg lii">10</li>
            <li className="bgg lii">11</li>
          </ul>
          <ul className="ull">
            <li className="lii lii">COLOR: Unico</li>
          </ul>
          <span className="foot">
            <button className="fa fa-shopping-bag btn4">
              <Link className="enlace1" to={`/comprar/${productosMarcas.id}`}>
                Comprar
              </Link>
            </button>
            {!auth ? (
              <div id="eliminar">
                <div
                  id="cartel"
                  class="alert alert-warning d-flex alert-dismissible fade show"
                  role="alert"
                >
                  <strong>debes estar registrado!</strong>

                  <button
                    onClick={() => cruz()}
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </span>
          <span className="foot">
            <button
              class="fa fa-shopping-bag btn4"
              onClick={() =>
                addCart(
                  productosMarcas.name,
                  productosMarcas.price.current.value,
                  productosMarcas.media.images[0].url
                )
              }
            >
              Add to cart<span class="bg"></span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
