/** Table reservation */
(function() {

    const tables = document.querySelectorAll(".table:not(.table--reserved)");
    //console.log(tables);
    for (const table of tables) {
        table.addEventListener("click", showNotice);
    }

    function showNotice(event) {
        console.log("index = " + event.target.dataset.tableNumber);
    }
})();