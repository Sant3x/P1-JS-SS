function costos() {
    var costoluz = document.getElementById("luz").value;
    var costogas = document.getElementById('gas').value;
    var internet = document.getElementById('internet').value;
    var celular = document.getElementById('celular').value;
    var supermercado = document.getElementById('supermercado').value;
    var sueldo = document.getElementById("dinero").value;
  
    result.innerHTML  = parseFloat(costoluz) + parseFloat(costogas) + parseFloat(internet) + parseFloat(celular) + parseFloat(supermercado);
    result1.innerHTML  = parseFloat(sueldo) - parseFloat(costoluz) - parseFloat(costogas) - parseFloat(internet) - parseFloat(celular) - parseFloat(supermercado);
}

