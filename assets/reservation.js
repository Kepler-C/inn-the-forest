/** Table reservation */
(function() {

    const tables = document.querySelectorAll(".table:not(.table--reserved)");
    const modal = document.querySelector('#reservationNotice');

    for (const table of tables) {
        table.addEventListener("click", showNotice);
    }

    function showNotice(event) {
        let tableNr = event.target.dataset.tableNumber;
        let noticeBox = document.querySelector('#noticeContent');
        noticeBox.innerHTML = "Wollen Sie den Tisch Nr. " + tableNr + " auswählen?";
        modal.style.display = 'block';
    }

    const closeButtons = document.querySelectorAll('span.close, .confirmation--close');
    for (const btn of closeButtons) {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
      
})();