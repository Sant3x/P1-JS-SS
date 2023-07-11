let mail = prompt('Cual es tu mail?');
 
 

const options1 = { style: 'currency', currency: 'USD' };
const numberFormat1 = new Intl.NumberFormat('en-US', options1);
 



function costos() {

  
  let costoluz = document.getElementById("luz").value;
  let costogas = document.getElementById('gas').value;
  let internet = document.getElementById('internet').value;
  let celular = document.getElementById('celular').value;
  let supermercado = document.getElementById('supermercado').value;
  let sueldo = document.getElementById("dinero").value;
  let alquiler = document.getElementById("alquiler").value;
  let tarjeta = document.getElementById("tarjeta").value;
  let salidas = document.getElementById("salidas").value;
  let sueldoscostos = parseFloat(sueldo) - parseFloat(costoluz) - parseFloat(costogas) - parseFloat(internet) - parseFloat(celular) - parseFloat(supermercado);





  let sumatatoria = (parseFloat(tarjeta) + parseFloat(alquiler) + parseFloat(costoluz) + parseFloat(costogas) + parseFloat(internet) + parseFloat(celular) + parseFloat(supermercado) + parseFloat(salidas))
  let salidascostos = (salidas / sueldo).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
  let costos = (sumatatoria / sueldo).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
  result.innerHTML = (numberFormat1.format(sumatatoria));
  result2.innerHTML = (costos);
  result1.innerHTML = (numberFormat1.format(sueldoscostos));
  result3.innerHTML = (salidascostos);
  result4.innerHTML = (getRawData);

}




