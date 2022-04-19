import { useEffect, useState } from "react";
import "../../views/Css/Css.css";
import zapas from "./images/zapas.png";
import sudaderas from "./images/sudaderas.jpg";
import pantalones from "./images/pantalones.jpg";
//import { Link } from "react-router-dom";
export default function Datos() {
  const [datos, setDatos] = useState([]);
  useEffect(function () {
    async function data() {
      let response = await fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=3&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
        {
          headers: {
            "X-RapidApi-Host": "asos2.p.rapidapi.com",
            "x-rapidApi-Key":
              "700f15e753msh66cee58678db428p107f7ejsnbe8596dff1e8",
          },
        }
      );
      let json = await response.json();
      json = json.products;
      setDatos(json);
    }
    data();
  }, []);
  if (!datos) {
    return (
      <div>
        <h1>cargando</h1>
      </div>
    );
  }
  let x = "https://";
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide  m-auto w-50 py-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel1 carousel-inner py-3 border border-primary rounded bg-light">
        <div className="carousel-item active">
          <img src={pantalones} className="  fotoc card-img-top " alt="..." />

          <div className="carousel-caption d-none d-md-block ">
            <h5>Nike P6000 Sneakers in triple white</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel1 carousel-item">
          <img src={sudaderas} className=" fotoc card-img-top" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>

        <div className="carousel1 carousel-item">
          <img src={zapas} className=" fotoc card-img-top " alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
} /*
<div>
{datos.map((dato) => (
  <div className="card" style={{ width: "18rem" }} key={dato.id}>
    <img src={x + dato.imageUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{dato.name}</h5>
      <p className="card-text">{dato.colour}</p>
    </div>
  </div>
))}
</div>*/
