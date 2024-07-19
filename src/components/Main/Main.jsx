import supergra from "../../assets/supergra.png";
import logo777 from "../../assets/logo777.png";
import favbet from "../../assets/favbet.png";
import ggbet from "../../assets/ggbet.png";
import slotscity from "../../assets/slotscity.png";
import first from "../../assets/first.png";
import stars from "../../assets/stars.png";
import top from "../../assets/top.png";
import hot from "../../assets/hot.png";
import casinoua from "../../assets/casinoua.png";
import { useEffect, useState } from "react";

export const Main = () => {
  const params = new URLSearchParams(document.location.search);
  let pid = params.get("pid") ?? localStorage.getItem("pid");
  const sub1 = params.get("sub1") ?? localStorage.getItem("sub1");
  const sub2 = params.get("sub2") ?? localStorage.getItem("sub2");
  const sub3 = params.get("sub3") ?? localStorage.getItem("sub3");
  const sub4 = params.get("sub4") ?? localStorage.getItem("sub4");
  const sub5 = params.get("sub5") ?? localStorage.getItem("sub5");
  const sub6 = params.get("sub6") ?? localStorage.getItem("sub6");
  const sub7 = params.get("sub7") ?? localStorage.getItem("sub7");
  const sub8 = params.get("sub8") ?? localStorage.getItem("sub8");
  const sub9 = params.get("sub9") ?? localStorage.getItem("sub9");
  const [showOffers, setShowOffers] = useState(null);

  useEffect(() => {
    const showOffersParam = params.get("showOffers");

    if (showOffersParam) {
      const offerIds = showOffersParam.split(",").map(Number);
      setShowOffers(new Set(offerIds));
    } else {
      setShowOffers(null);
    }
  }, []);

  if (!pid) {
    pid = 17;
  }

  if (pid !== null && pid) {
    localStorage.setItem("pid", pid);
  }

  if (sub1 !== null && sub1) {
    localStorage.setItem("sub1", sub1);
  }

  if (sub2 !== null && sub2) {
    localStorage.setItem("sub2", sub2);
  }

  if (sub3 !== null && sub3) {
    localStorage.setItem("sub3", sub3);
  }

  if (sub4 !== null && sub4) {
    localStorage.setItem("sub4", sub4);
  }

  if (sub5 !== null && sub5) {
    localStorage.setItem("sub5", sub5);
  }

  if (sub6 !== null && sub6) {
    localStorage.setItem("sub6", sub6);
  }

  if (sub7 !== null && sub7) {
    localStorage.setItem("sub7", sub7);
  }
  if (sub8 !== null && sub8) {
    localStorage.setItem("sub8", sub8);
  }
  if (sub9 !== null && sub9) {
    localStorage.setItem("sub9", sub9);
  }

  const clickHandler = (t, tgLink, offer) => {
    let e = "deep-link";
    let r = true;
    let n = {
      variables: {},
    };

    if (pid !== null) {
      n.variables["pid"] = pid;
    }
    if (sub1 !== null) {
      n.variables["sub1"] = sub1;
    }
    if (sub2 !== null) {
      n.variables["sub2"] = sub2;
    }
    if (sub3 !== null) {
      n.variables["sub3"] = sub3;
    }
    if (sub4 !== null) {
      n.variables["sub4"] = sub4;
    }
    if (sub5 !== null) {
      n.variables["sub5"] = sub5;
    }
    if (sub6 !== null) {
      n.variables["sub6"] = sub6;
    }
    if (sub7 !== null) {
      n.variables["sub7"] = sub7;
    }
    if (sub8 !== null) {
      n.variables["sub8"] = sub8;
    }
    if (sub9 !== null) {
      n.variables["sub9"] = sub9;
    }
    let a = {
      context: { range: [], scope: {}, variables: n },
      messengers: [
        {
          key: "?",
          name: "telegram",
          parameter: "start",
          prefixes: ["tg://", "https://t.me/"],
        },
      ],
      delimiter: "|",
      url: "/api/i/store",
    };
    // document
    //   .getElementById("tg://resolve?start=ZGw6MTk5Mzc1&domain=sloto_ua_bot")
    //   .addEventListener("click", function (t) {
    // eslint-disable-next-line no-unused-expressions
    t.preventDefault(),
      (function (e) {
        let t = new XMLHttpRequest();
        // eslint-disable-next-line no-unused-expressions
        t.open("POST", "https://tosnusa12.customer.smartsender.eu/api/i/store"),
          t.setRequestHeader("Content-type", "application/json"),
          t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          (t.onreadystatechange = function () {
            if (4 === this.readyState && 200 === this.status) {
              let t = JSON.parse(this.responseText);
              window.location.href = (function (e, t) {
                let r = a.messengers.find(function (t) {
                    return t.prefixes.find(function (t) {
                      return 0 === e.indexOf(t);
                    });
                  }),
                  n = e.split(r.key),
                  s = n[1].split("&");
                return (
                  s.forEach(function (e, n) {
                    let i = e.split("=");
                    if (r.parameter === i[0]) {
                      let e = btoa(atob(i[1]) + a.delimiter + t.id).replace(
                        /=/g,
                        ""
                      );
                      s.splice(n, 1, [r.parameter, e].join("="));
                    }
                  }),
                  n[0] + r.key + s.join("&")
                );
              })(e, t);
            }
          }),
          t.send(
            (function (e) {
              return (
                Object.keys(a.context).forEach(function (t) {
                  Object.keys(e).includes(t) || (e[t] = {});
                }),
                JSON.stringify(
                  r
                    ? ((t = e),
                      new URLSearchParams(window.location.search).forEach(
                        function (e, r) {
                          t.variables.hasOwnProperty(r) || (t.variables[r] = e);
                        }
                      ),
                      t)
                    : e
                )
              );
              var t;
            })(n)
          );
      })(tgLink);
    setTimeout(() => {
      if (offer === "super") {
        onWebsiteSuperBtnClick();
      } else if (offer === "favbet") {
        onWebsiteFavBtnClick();
      } else if (offer === "777") {
        onWebsite777BtnClick();
      } else if (offer === "ggbet") {
        onWebsiteGGbetBtnClick();
      } else if (offer === "slotscity") {
        onWebsiteSlotscityBtnClick();
      } else if (offer === "first") {
        onWebsiteFirstBtnClick();
      } else if (offer === "casino") {
        onWebsiteCasinoUABtnClick();
      }
    }, 3000);
  };

  function onWebsiteFavBtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=802` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsiteSuperBtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=1262` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsite777BtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=1390` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsiteGGbetBtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=1052` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsiteSlotscityBtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=389` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsiteFirstBtnClick() {
    window.location.href =
      `https://hypertraff.top/4rBtk4cz?a=b` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  function onWebsiteCasinoUABtnClick() {
    window.location.href =
      `https://sho.tgntraff.com/click?pid=${pid}&offer_id=1292` +
      (sub1 !== null ? `&sub1=${sub1}` : "") +
      (sub2 !== null ? `&sub2=${sub2}` : "") +
      (sub3 !== null ? `&sub3=${sub3}` : "") +
      (sub4 !== null ? `&sub4=${sub4}` : "") +
      (sub5 !== null ? `&sub5=${sub5}` : "") +
      (sub6 !== null ? `&sub6=${sub6}` : "") +
      (sub7 !== null ? `&sub7=${sub7}` : "") +
      (sub8 !== null ? `&sub8=${sub8}` : "") +
      (sub9 !== null ? `&sub9=${sub9}` : "");
  }

  return (
    <main
      className="main"
      style={showOffers?.size <= 3 ? { minHeight: "90vh" } : { fill: "dark" }}
    >
      <div className="container">
        <p className="main__title">
          <svg
            width="35"
            height="44"
            viewBox="0 0 35 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7383 10.4782C22.1838 10.4782 26.4472 12.2441 29.5906 15.3876C32.734 18.531 34.5 22.7944 34.5 27.2399C34.5 31.6854 32.734 35.9488 29.5906 39.0922C26.4472 42.2356 22.1838 44.0016 17.7383 44.0016C13.2928 44.0016 9.02939 42.2356 5.88596 39.0922C2.74252 35.9488 0.976563 31.6854 0.976562 27.2399C0.976562 22.7944 2.74252 18.531 5.88596 15.3876C9.02939 12.2441 13.2928 10.4782 17.7383 10.4782ZM17.7383 17.8114L14.9684 23.4266L8.77076 24.3275L13.2545 28.6961L12.1964 34.8686L17.7383 31.9541L23.2801 34.8665L22.222 28.6961L26.7058 24.3254L20.5082 23.4245L17.7383 17.8114ZM19.8335 0L30.3096 0.00209531V6.28774L27.4538 8.67209C25.0838 7.42948 22.4965 6.65549 19.8335 6.3925V0ZM15.6431 0V6.3904C12.9808 6.65366 10.3942 7.42765 8.02486 8.67L5.16699 6.28774V0.00209531L15.6431 0Z"
              fill="url(#paint0_linear_1396_5488)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1396_5488"
                x1="17.7383"
                y1="3.35286"
                x2="17.7383"
                y2="44.0016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE924" />
                <stop offset="1" stopColor="#FFF741" />
              </linearGradient>
            </defs>
          </svg>
          ТОП КАЗИНО
          <svg
            width="35"
            height="44"
            viewBox="0 0 35 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7383 10.4782C22.1838 10.4782 26.4472 12.2441 29.5906 15.3876C32.734 18.531 34.5 22.7944 34.5 27.2399C34.5 31.6854 32.734 35.9488 29.5906 39.0922C26.4472 42.2356 22.1838 44.0016 17.7383 44.0016C13.2928 44.0016 9.02939 42.2356 5.88596 39.0922C2.74252 35.9488 0.976563 31.6854 0.976562 27.2399C0.976562 22.7944 2.74252 18.531 5.88596 15.3876C9.02939 12.2441 13.2928 10.4782 17.7383 10.4782ZM17.7383 17.8114L14.9684 23.4266L8.77076 24.3275L13.2545 28.6961L12.1964 34.8686L17.7383 31.9541L23.2801 34.8665L22.222 28.6961L26.7058 24.3254L20.5082 23.4245L17.7383 17.8114ZM19.8335 0L30.3096 0.00209531V6.28774L27.4538 8.67209C25.0838 7.42948 22.4965 6.65549 19.8335 6.3925V0ZM15.6431 0V6.3904C12.9808 6.65366 10.3942 7.42765 8.02486 8.67L5.16699 6.28774V0.00209531L15.6431 0Z"
              fill="url(#paint0_linear_1396_5488)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1396_5488"
                x1="17.7383"
                y1="3.35286"
                x2="17.7383"
                y2="44.0016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE924" />
                <stop offset="1" stopColor="#FFF741" />
              </linearGradient>
            </defs>
          </svg>
        </p>
        <div className="main__thumb">
          {(!showOffers || showOffers.has(1)) && (
            <div className="main__item">
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two">
                    <img src={ggbet} alt="GG" className="main__logo" />
                    <div>
                      <p className="main__top--title">GG</p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={hot} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle">
                  <div className="main__promo--wrapper">
                    <p
                      className="main__text--top"
                      style={{ lineHeight: "59.1px" }}
                    >
                      12,000 ГРН
                    </p>
                  </div>
                  <p
                    className="main__text--bottom"
                    style={{ lineHeight: "21.1px" }}
                  >
                    50FS
                  </p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODUz&domain=top_from_streamer_bot",
                      "ggbet"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
          {(!showOffers || showOffers.has(2)) && (
            <div className="main__item" style={{ height: "294px" }}>
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two">
                    <img src={slotscity} alt="SC" className="main__logo" />
                    <div>
                      <p className="main__top--title">SC</p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={hot} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle" style={{ height: "117px" }}>
                  <div className="main__promo--wrapper">
                    <p className="main__text--top main__text--sc">100 FS</p>
                    <div className="main__fade">
                      <p className="main__fade--text">Промокод</p>
                      <div className="main__fade--promo">CLUBWIN</div>
                    </div>
                  </div>
                  <p className="main__text--bottom">БЕЗ ВІДІГРАШУ</p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODUw&domain=top_from_streamer_bot",
                      "slotscity"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
          {/* <div
            className="main__item"
            style={{
              background: "linear-gradient(180deg, #910C0C 0%, #0C0802 100%)",
            }}
          >
            <img src={first} alt="logotype" width={254} height={76} />
            <p className="main__text--top">100000₴</p>
            <p className="main__text--bottom" style={{ color: "#FAFF00" }}>
              +400 ФРІСПІНІВ
            </p>
            <div className="main__fade">
              <p className="main__fade--text">Новий бонус</p>
            </div>
            <button
              type="button"
              className="main__button"
              onClick={(e) => {
                clickHandler(
                  e,
                  "tg://resolve?start=ZGw6MjEwNTg5&domain=spin_ua_bonus_bot",
                  "first"
                );
              }}
            >
              ОТРИМАТИ БОНУС
            </button>
          </div> */}
          {(!showOffers || showOffers.has(3)) && (
            <div className="main__item">
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two main__wrapper--super">
                    <img src={supergra} alt="supergra" className="main__logo" />
                    <div>
                      <p className="main__top--title main__top--title--super">
                        Super Game
                      </p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={hot} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle">
                  <div className="main__promo--wrapper">
                    <p className="main__text--top">100FS</p>
                  </div>
                  <p className="main__text--bottom">БЕЗ ВІДІГРАШУ</p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODQ3&domain=top_from_streamer_bot",
                      "super"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
          {(!showOffers || showOffers.has(4)) && (
            <div className="main__item">
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two">
                    <img src={logo777} alt="777" className="main__logo" />
                    <div>
                      <p
                        className="main__top--title"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        777
                      </p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={hot} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle">
                  <div className="main__promo--wrapper">
                    <p className="main__text--top">200 ГРН</p>
                  </div>
                  <p className="main__text--bottom">БЕЗ ДЕПОЗИТУ</p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODU5&domain=top_from_streamer_bot",
                      "777"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
          {(!showOffers || showOffers.has(5)) && (
            <div className="main__item">
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two">
                    <img src={favbet} alt="favbet" className="main__logo" />
                    <div>
                      <p className="main__top--title">Favbet</p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={top} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle">
                  <div className="main__promo--wrapper">
                    <p className="main__text--top">100FS</p>
                  </div>
                  <p className="main__text--bottom">БЕЗ ВІДІГРАШУ</p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODQ0&domain=top_from_streamer_bot",
                      "favbet"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
          {/* <div className="main__item" style={{ height: "294px" }}>
            <div className="main__wrapper--top">
              <div className="main__wrapper--two">
                <img src={favbet} alt="favbet" className="main__logo" />
                <div>
                  <p className="main__top--title">Favbet</p>
                  <img src={stars} alt="stars" className="main__stars" />
                </div>
              </div>
              <img src={hot} alt="info" className="main__info--svg" />
            </div>
            <div className="main__middle" style={{ height: "117px" }}>
              <div className="main__promo--wrapper">
                <p className="main__text--top">25 FS</p>
                <div className="main__fade">
                  <p className="main__fade--text">Промокод</p>
                  <div className="main__fade--promo">fav25fs</div>
                </div>
              </div>
              <p className="main__text--bottom">БЕЗ ВІДІГРАШУ</p>
            </div>
            <button
              type="button"
              className="main__button"
              onClick={(e) => {
                clickHandler(
                  e,
                  "tg://resolve?start=ZGw6MjA4NDA1&domain=spin_ua_bonus_bot",
                  "favbet"
                );
              }}
            >
              ОТРИМАТИ БОНУС
            </button>
          </div> */}
          {(!showOffers || showOffers.has(6)) && (
            <div className="main__item">
              <div className="fire">
                <div className="main__wrapper--top">
                  <div className="main__wrapper--two">
                    <img
                      src={casinoua}
                      alt="Casino UA"
                      className="main__logo"
                    />
                    <div>
                      <p className="main__top--title main__title--ua">
                        Casino Ua
                      </p>
                      <img src={stars} alt="" className="main__stars" />
                    </div>
                  </div>
                  <img src={hot} alt="info" className="main__info--svg" />
                </div>
                <div className="main__middle">
                  <div className="main__promo--wrapper">
                    <p className="main__text--top main__text--ua">
                      200,000 ГРН + 300FS
                    </p>
                  </div>
                  <p className="main__text--bottom">БЕЗ ВІДІГРАШУ</p>
                </div>
                <button
                  type="button"
                  className="main__button"
                  onClick={(e) => {
                    clickHandler(
                      e,
                      "tg://resolve?start=ZGw6MjIyODU2&domain=top_from_streamer_bot",
                      "casino"
                    );
                  }}
                >
                  ОТРИМАТИ БОНУС
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
