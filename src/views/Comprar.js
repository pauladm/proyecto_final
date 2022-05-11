import "./Css/comprar.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import $ from "jquery";
export default function Comprar() {
  const [productosMarcas, setProductosMarcas] = useState(null);
  const { id } = useParams();
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
  $(document).ready(function () {
    var cardNum = document.getElementById("cr_no");
    cardNum.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
      var parts = [];

      for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
      }

      for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < "0" || c > "9") {
          caretPosition--;
        }
      }
      caretPosition += Math.floor(caretPosition / 4);

      this.value = this.lastValue = parts.join("-");
      this.selectionStart = this.selectionEnd = caretPosition;
    };

    //For Date formatted input
    var expDate = document.getElementById("exp");
    expDate.onkeyup = function (e) {
      if (this.value == this.lastValue) return;
      var caretPosition = this.selectionStart;
      var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
      var parts = [];

      for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
        parts.push(sanitizedValue.substring(i, i + 2));
      }

      for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < "0" || c > "9") {
          caretPosition--;
        }
      }
      caretPosition += Math.floor(caretPosition / 2);

      this.value = this.lastValue = parts.join("/");
      this.selectionStart = this.selectionEnd = caretPosition;
    };

    // Radio button
    $(".radio-group .radio").click(function () {
      $(this).parent().find(".radio").removeClass("selected");
      $(this).addClass("selected");
    });
  });
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-11">
          <div class="card card0 rounded-0">
            <div class="row">
              <div class="col-md-5 d-md-block d-none p-0 box">
                <div class="card rounded-0 border-0 card1" id="bill">
                  <h3 id="heading1">Payment Summary</h3>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Electronics</h2>
                      <small class="bill-date">2017 Feb 10 at 10:30 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4">CAF</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Food</h2>
                      <small class="bill-date">2017 Feb 25 at 11:30 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4">JFK</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Grocery</h2>
                      <small class="bill-date">2017 Mar 17 at 10:45 PM</small>
                      <small class="bill-date">2017 Mar 18 at 11:45 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4">LHR</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Accessories</h2>
                      <small class="bill-date">2017 Apr 13 at 05:30 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4">JFK</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col1 red-bg">
                      <p class="bill-date" id="total-label">
                        Total Price
                      </p>
                      <h2 class="bill-head" id="total">
                        $ 523.65
                      </h2>
                      <small class="bill-date" id="total-label">
                        Price includes all taxes
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-7 col-sm-12 p-0 box">
                <div class="card rounded-0 border-0 card2" id="paypage">
                  <div class="form-card">
                    <h2 id="heading2" class="text-danger">
                      Payment Method
                    </h2>
                    <div class="radio-group">
                      <div class="radio" data-value="credit">
                        <img
                          src="https://i.imgur.com/28akQFX.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                      <div class="radio" data-value="paypal">
                        <img
                          src="https://i.imgur.com/5QFsx7K.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                    </div>
                    <label class="pay">Name on Card</label>
                    <input
                      type="text"
                      name="holdername"
                      placeholder="John Smith"
                    />
                    <div class="row">
                      <div class="col-8 col-md-6">
                        <label class="pay">Card Number</label>
                        <input
                          type="text"
                          name="cardno"
                          id="cr_no"
                          placeholder="0000-0000-0000-0000"
                          minlength="19"
                          maxlength="19"
                        />
                      </div>
                      <div class="col-4 col-md-6">
                        <label class="pay">CVV</label>
                        <input
                          type="password"
                          name="cvcpwd"
                          placeholder="&#9679;&#9679;&#9679;"
                          class="placeicon"
                          minlength="3"
                          maxlength="3"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label class="pay">Expiration Date</label>
                      </div>
                      <div class="col-md-12">
                        <input
                          type="text"
                          name="exp"
                          id="exp"
                          placeholder="MM/YY"
                          minlength="5"
                          maxlength="5"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <input
                          type="submit"
                          value="MAKE A PAYMENT &nbsp; &#xf178;"
                          class="btn btn-info placeicon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
