$(document).ready(function () {
  console.log(reservation);

  const LOGIN_DATA = { username: 12345, password: "abc" };

  $("#overlay").on("click", () => {
    closeModal();
  });
  $(".modal__close").on("click", () => {
    closeModal();
  });

  $("#login").on("click", () => {
    $("#login_modal").css("display", "flex");
    $("#overlay").css("display", "flex");
    $("#overlay").animate({ opacity: 1 }, 200);
    $("#login_modal").animate({ opacity: 1 }, 200);
  });

  function closeModal() {
    $("#overlay").animate({ opacity: 0 }, 200, () => {
      $("#overlay").css("display", "none");
    });
    $(".modal").animate({ opacity: 0 }, 200, () => {
      $(".modal").css("display", "none");
    });
  }

  $("#menu-selection").on("click", () => {
    $("#menu_modal").css("display", "flex");
    $("#overlay").css("display", "flex");
    $("#overlay").animate({ opacity: 1 }, 200);
    $("#menu_modal").animate({ opacity: 1 }, 200);
  });

  $("#modal__submit").on("click", () => {
    if (
      LOGIN_DATA.username == $("#modal__username").val() &&
      LOGIN_DATA.password == $("#modal__password").val()
    ) {
      location.href = "mitarbeiter.html";
    } else {
      $("#modal__error").css("display", "block");
    }
  });

  $(".modal__input").on("input", () => {
    $("#modal__error").css("display", "none");
  });

  $("#logout").on("click", () => {
    location.href = "index.html";
  });

  saveMenu = (menu) => {
    reservation.menu = menu;
    console.log(reservation);
    $("#menu-button").text(`Auswahl: ${menu}`);
    closeModal();
  };

  saveData = () => {
    reservation.date = $("#date-input").val();
    reservation.time = $("#time-input").val();
    reservation.guests = $("#guests-input").val();
    reservation.fname = $("#fname-input").val();
    reservation.lname = $("#lname-input").val();
    reservation.phone = $("#phone-input").val();
    reservation.mail = $("#mail-input").val();
    console.log(reservation);
  };

  if (reservation.payment) {
    $("#confirmation").append(
      "<p>" +
        "Sie haben bereits mit " +
        reservation.payment +
        " bezahlt" +
        "</p>"
    );
  }
});

let reservation = {};

function saveMenu(menu) {}

function saveData() {}

function savePayment(payment) {
  reservation.payment = payment;
}
