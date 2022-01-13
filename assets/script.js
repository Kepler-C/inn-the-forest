$(document).ready(function () {
  const LOGIN_DATA = { username: 12345, password: "abc" };

  $("#overlay").on("click", () => {
    $("#overlay").animate({ opacity: 0 }, 200, () => {
      $("#overlay").css("display", "none");
    });
    $("#modal").animate({ opacity: 0 }, 200, () => {
      $("#modal").css("display", "none");
    });
  });

  $("#login").on("click", () => {
    $("#modal").css("display", "flex");
    $("#overlay").css("display", "flex");
    $("#overlay").animate({ opacity: 1 }, 200);
    $("#modal").animate({ opacity: 1 }, 200);
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
});
