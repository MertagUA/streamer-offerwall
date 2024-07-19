import logo from "../../assets/logoFooter.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cros from "../../assets/cros.png";
import mail from "../../assets/mail.png";

let currentDate = new Date();

let currentYear = currentDate.getFullYear();

export const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEmailOpen, setModalEmailOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isCheckedModalOpen, setIsCheckedModalOpen] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    setPhone(number);

    const ukrainianNumberRegex = /^(?:\+?38)?(?:\(0\d{2}\)|0\d{2})\d{7}$/;

    setIsValid(ukrainianNumberRegex.test(number));
  };

  const notify = () => {
    if (isValid) {
      toast.success("Успішно!");
    } else {
      toast.error("Перевірте правильність номера");
    }
  };

  const parametrs = new URLSearchParams(document.location.search);

  const fromMail = parametrs.get("mail");

  useEffect(() => {
    if (fromMail) {
      localStorage.setItem("isAlreadyWorkedWithEmail", true);
    }

    let isWorked = localStorage.getItem("isAlreadyWorkedWithEmail");
    if (!isWorked) {
      setTimeout(() => {
        setModalEmailOpen(true);
      }, 15000);
    }
  }, []);

  const send = () => {
    const paramets = new URLSearchParams(document.location.search);

    let listId = "1360";

    const sub1 = paramets.get("sub1") ?? localStorage.getItem("sub1");
    const sub2 = paramets.get("sub2") ?? localStorage.getItem("sub2");
    const sub3 = paramets.get("sub3") ?? localStorage.getItem("sub3");
    const sub4 = paramets.get("sub4") ?? localStorage.getItem("sub4");
    const sub5 = paramets.get("sub5") ?? localStorage.getItem("sub5");
    const sub6 = paramets.get("sub6") ?? localStorage.getItem("sub6");
    const sub7 = paramets.get("sub7") ?? localStorage.getItem("sub7");
    const sub8 = paramets.get("sub8") ?? localStorage.getItem("sub8");
    const sub9 = paramets.get("sub9") ?? localStorage.getItem("sub9");

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = document.querySelector(".form__inp__mail").value;

    let arr = [];
    // let link;
    // let index;
    if (!re.test(String(email).toLowerCase())) {
      alert("перевірте правильність емейлу");
      return false;
    } else {
      for (let i = 0; i < email.length; i++) {
        arr.push(email[i]);
        // index = arr.findIndex((item) => item === "@") + 1;
        // link = arr.slice(index).join("");
      }

      fetch(`https://tumble.top/ads/new/65`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          listId,
          sub1,
          sub2,
          sub3,
          sub4,
          sub5,
          sub6,
          sub7,
          sub8,
          sub9,
        }),
      });
      return true;
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <p className="footer__info">
              BlazeBet не проводить гральні дії і не несе відповідальності за
              будь-які фінансові втрати, пов'язані з азартними іграми. Ми
              постійно закликаємо до розумного та обачного грального підходу.
            </p>
          </div>
          <button
            type="button"
            className="footer__button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Відмовитись від дзвінків
          </button>
          <div className="footer__thumb">
            <img src={logo} alt="logotype" className="footer__logo" />
            <p className="footer__year">© {currentYear} streamingtt.top</p>
          </div>
        </div>
      </footer>
      {modalEmailOpen && (
        <div
          className="backdrop"
          id="backdrop"
          onClick={(e) => {
            if (e.target.id === "backdrop") {
              setModalEmailOpen(false);
            }
          }}
        >
          <div className="modal2">
            <div className="modal__top--wrapper">
              <div className="modal__top--wrapper2">
                <p className="modal__top--text">БОНУС ПРЯМО НА ПОШТУ</p>
              </div>
            </div>
            <p className="modal2__text">
              Введіть свою пошту та отримуй нові бонуси яких немає на сайті
            </p>
            <input
              type="text"
              className="modal2__input form__inp__mail"
              placeholder="Email"
            />
            <button
              type="button"
              className="modal2__button"
              onClick={() => {
                if (!send()) {
                  return;
                }
                localStorage.setItem("isAlreadyWorkedWithEmail", true);
                setModalEmailOpen(false);
                setIsCheckedModalOpen(true);
              }}
            >
              ПРОДОВЖИТИ
            </button>
          </div>
        </div>
      )}
      {isCheckedModalOpen && (
        <div
          className="backdrop"
          id="backdrop"
          onClick={(e) => {
            if (e.target.id === "backdrop") {
              setIsCheckedModalOpen(false);
            }
          }}
        >
          <div className="modal3">
            <div
              className="modal__top--wrapper2"
              style={{ justifyContent: "center" }}
            >
              <p className="modal__top--text">ПЕРЕВІРТЕ ПОШТУ</p>
            </div>
            <img
              src={mail}
              alt="mail"
              width={100}
              style={{ margin: "14px auto 0" }}
            />
            <p
              className="modal2__text"
              style={{
                textAlign: "center",
                marginTop: "14px",
                marginBottom: "14px",
              }}
            >
              Ми надіслали на вашу пошту лист - підтвердження
            </p>
            <button
              type="button"
              className="modal2__button"
              onClick={() => {
                setIsCheckedModalOpen(false);
              }}
            >
              ПРОДОВЖИТИ
            </button>
          </div>
        </div>
      )}
      {modalOpen && (
        <div
          className="backdrop"
          id="backdrop"
          onClick={(e) => {
            if (e.target.id === "backdrop") {
              setModalOpen(false);
            }
          }}
        >
          <div className="modal">
            <div className="modal__wrapper">
              <p className="modal__title">ВІДМОВА ВІД ДЗВІНКІВ</p>
            </div>
            <p className="modal__text">
              Введіть свій номер телефону та ми додамо його до чорного списку і
              ви більше не будете отримувати дзвінків
            </p>
            <input
              type="text"
              className="modal__input"
              placeholder="+38(ххх)-ххх-хх-хх"
              value={phone}
              onChange={handlePhoneNumberChange}
            />
            <button
              type="button"
              className="modal__button"
              onClick={() => {
                if (isValid) {
                  try {
                    axios.post(`https://bllazebet.com/api/unsubscribe/user`, {
                      phone,
                      key: "moxxMY16IqWS",
                    });
                    const sentCount = localStorage.getItem("sentCount");
                    if (sentCount === 4) {
                      setModalOpen(false);
                    } else if (sentCount) {
                      localStorage.setItem("sentCount", +sentCount + 1);
                    } else {
                      localStorage.setItem("sentCount", 1);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                  setPhone("");
                  setModalOpen(false);
                }
                notify();
              }}
            >
              Заблокувати номер
            </button>
          </div>
        </div>
      )}
    </>
  );
};
