
// get some data from stackoverflow
 
fetch("https://apis.datos.gob.ar/series/api/series/?ids=101.1_I2NG_2016_M_22:percent_change_a_year_ago&format=json&metadata=full")
 .then(res => res.json())
 .then(data => {
    console.log (data.data[74]);localStorage.setItem('IPC', JSON.stringify(data.data[74]));
 
  });



const options1 = { style: 'currency', currency: 'USD' };
const numberFormat1 = new Intl.NumberFormat('en-US', options1);


const option = {
  style: 'percent',
  maximumFractionDigits: 2
};
const formatter = new Intl.NumberFormat('en-US', option);



function costos() {

  const IPC= JSON.parse(localStorage.getItem('IPC'))

  let costoluz = document.getElementById("luz").value;localStorage.setItem('luz', JSON.stringify(costoluz));
  let costogas = document.getElementById('gas').value;localStorage.setItem('gas', JSON.stringify(costogas));
  let internet = document.getElementById('internet').value;localStorage.setItem('internet', JSON.stringify(internet));
  let celular = document.getElementById('celular').value;localStorage.setItem('celular', JSON.stringify(celular));
  let supermercado = document.getElementById('supermercado').value;localStorage.setItem('supermercado', JSON.stringify(supermercado));
  let sueldo = document.getElementById("dinero").value;localStorage.setItem('sueldo', JSON.stringify(sueldo));
  let alquiler = document.getElementById("alquiler").value;localStorage.setItem('alquiler', JSON.stringify(alquiler));
  let tarjeta = document.getElementById("tarjeta").value;localStorage.setItem('tarjeta', JSON.stringify(tarjeta));
  let salidas = document.getElementById("salidas").value;localStorage.setItem('salidas', JSON.stringify(salidas));
  let sueldoscostos = parseFloat(sueldo) - parseFloat(costoluz) - parseFloat(costogas) - parseFloat(internet) - parseFloat(celular) - parseFloat(supermercado);
  const total_costos_fijos =   [costoluz,costogas,internet,celular,supermercado,alquiler,tarjeta,salidas];

   
  console.log (total_costos_fijos)

  let sumatatoria = (parseFloat(tarjeta) + parseFloat(alquiler) + parseFloat(costoluz) + parseFloat(costogas) + parseFloat(internet) + parseFloat(celular) + parseFloat(supermercado))
  
  
  
  let salidascostos = (salidas / sueldo).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
  let costos = (sumatatoria / sueldo).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
  result.innerHTML = (numberFormat1.format(sumatatoria));
  result2.innerHTML = (costos);
  result1.innerHTML = (numberFormat1.format(sueldoscostos));
  result3.innerHTML = (salidascostos);
  result4.innerHTML = (numberFormat1.format(salidas));
  result5.innerHTML =  formatter.format((IPC[1]))  
  
}


function remover () 

{
     
  localStorage.clear();
 


}

function clearSpan(){
  document.getElementById("result").innerHTML = "";
  document.getElementById("result1").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
  document.getElementById("result4").innerHTML = "";
  

  }
  

 