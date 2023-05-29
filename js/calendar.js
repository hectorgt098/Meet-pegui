document.addEventListener("DOMContentLoaded", function() {
    var calendar = document.getElementById("calendar");
  
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
  
    var weekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  
    // Crear encabezado de días de la semana
    for (var i = 0; i < weekdays.length; i++) {
      var dayElement = document.createElement("div");
      dayElement.textContent = weekdays[i];
      dayElement.classList.add("day");
      calendar.appendChild(dayElement);
    }
  
    // Agregar días del mes
    for (var j = 1; j <= daysInMonth; j++) {
      var dayElement = document.createElement("div");
      dayElement.textContent = j;
      dayElement.classList.add("day");
      calendar.appendChild(dayElement);
    }
  
    // Ajustar el inicio del calendario según el primer día del mes
    for (var k = 0; k < firstDay; k++) {
      var emptyDayElement = document.createElement("div");
      emptyDayElement.classList.add("day");
      calendar.appendChild(emptyDayElement);
    }
  });
  