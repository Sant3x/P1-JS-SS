const validarEmail = (email) => {
  if (!isNaN(email) || email === null || email === '' || (email !== null && email.trim() === '') || email.length < 5 || !email.includes('@') || !email.includes('.com')) {
    alert('Por favor, introduzca un email válido con al menos 5 caracteres y que contenga "@" y ".com".');
    return false;
  } else {
    return true;
  }
};

const pedirMail = () => {
  let mail = prompt('Cuál es tu mail?');

  if (validarEmail(mail)) {
    confirm('Genial, continuemos!');
  } else {
    pedirMail();
  }
};

pedirMail();





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




