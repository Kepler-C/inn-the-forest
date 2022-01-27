$(document).ready(function () {
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

  $("#table_selection").on("click", () => {
    $("#table_selection_modal").css("display", "flex");
    $("#overlay").css("display", "flex");
    $("#overlay").animate({ opacity: 1 }, 200);
    $("#table_selection_modal").animate({ opacity: 1 }, 200);
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
    $("#menu-button").text(`Menü: ${menu}`);
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
  };

  $("#reservation-form").submit(function (e) {
    e.preventDefault();
    $("#confirmation").empty();
    $("#confirmation").append("<p>Vielen Dank!</p>");
    $("#confirmation").append(
      "<p>Sie haben für den " +
        reservation.date +
        " um " +
        reservation.time +
        " Uhr an Tisch " +
        reservation.table +
        " mit " +
        reservation.guests +
        " Gäste(n) reserviert</p>"
    );
    $("#confirmation").append(
      "<p>Ihre Daten sind: </p> <p> Vorname: " +
        reservation.fname +
        ", Nachname: " +
        reservation.lname +
        ", Tel:  " +
        reservation.phone +
        ", E-Mail:  " +
        reservation.mail +
        "</p>"
    );
    if (reservation.payment) {
      $("#confirmation").append(
        "<p>" +
          "Sie haben bereits mit " +
          reservation.payment +
          " bezahlt" +
          "</p>"
      );
    }
    $("#confirmation").append(
      "<p> " +
        "Wir haben Ihnen zusätzlich eine Bestätigungs-Email zugeschickt als " +
        "Erinnerung für den Termin." +
        " </p>" +
        "<p>Wir freuen uns auf Ihren Besuch Inn the Forest!</p>" +
        " <p>Sie können nun zur Homepage zurück gehen!</p>"
    );

    $("#confirmation_modal").css("display", "flex");
    $("#overlay").css("display", "flex");
    $("#overlay").animate({ opacity: 1 }, 200);
    $("#confirmation_modal").animate({ opacity: 1 }, 200);
    $("#reservation-form")[0].reset();
  });

  $(".table").on("click", function (event) {
    event.preventDefault();
    const table = $(this).data("tableNumber");
    reservation.table = table;
    $("#table_selection").text(`Tisch: ${table}`);

    closeModal();
  });
});

let reservation = {};

function saveMenu(menu) {}

function saveData() {}

function savePayment(payment) {
  reservation.payment = payment;
  $(".payment-button").css("background-color", "rgb(211, 211, 211)");
  $("#payment-" + payment).css("background-color", "rgb(91, 131, 243)");
}
