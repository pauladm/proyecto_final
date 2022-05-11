import "./Css/producto.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gorraa from "./imagenes/gorraa.jpg";
import shortnike from "./imagenes/shortnike.jpg";
import camisetas from "./imagenes/camisetas.jpg";
import sudaderack from "./imagenes/sudaderack.jpg";
import tenis from "./imagenes/tenis.jpg";
import jeans from "./imagenes/jeans.jpg";
export default function Parati() {
  const { id } = useParams();
  const [productosMarcas, setProductosMarcas] = useState(null);
  let filtro = ["cap"];
  let gorra = document.getElementById("gorrach");
  function AddCheck() {
    filtro.push("cap");
    console.log(filtro);
  }

  useEffect(function () {
    async function data() {
      let check = "";
      console.log(gorra.checked);
      if (gorra) {
        check += "cap&";
      }

      let response = await fetch(
        `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${check}&currency=USD&sizeSchema=US&lang=en-US`,
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
  }, []);

  return (
    <section className=" m-auto">
      <div className=" container  py-5">
        <h4 className="text-center mb-5">
          <strong>Product listing</strong>
        </h4>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src={`${gorraa}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          onClick={AddCheck()}
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="gorrach"
                        />
                        Gorras
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src={`${shortnike}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        Pantalones cortos
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src={`${sudaderack}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        Sudaderas
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
              <img src={`${camisetas}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        Camisetas
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src={`${tenis}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        Tenis
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-44">
            <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src={`${jeans}`} className="w-100" />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="d-flex justify-content-start align-items-start h-100">
                    <h5>
                      <span className="badge bg-light pt-2 ms-3 mt-3 text-dark d-inline">
                        <input
                          class=" mx-1 form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        Vaqueros
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
