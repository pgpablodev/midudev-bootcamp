import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));

let huso = "MAD";

const App = () => {  
  const [valorFecha, setFecha] = useState(new Date());

  setInterval(() => {
    const fecha = new Date();
    ajustaReloj(fecha);   
    setFecha(fecha);
  }, 1000);

  return(
    <div>
      <h1>Fecha y hora actuales: </h1>
      <h3>
        {valorFecha.toUTCString()}      
      </h3>
      <button id="boton" onClick={() => {cambioHuso()}}>
        Madrid (GMT + 2 h)
      </button>
    </div>
  );
}

const cambioHuso = () => {
  if(huso==="MAD"){
    huso = "LON";
    document.getElementById("boton").innerText = "Londres (GMT + 1 h)";
  }else if(huso==="LON"){
    huso = "AZO";
    document.getElementById("boton").innerText = "Azores (GMT)";
  }else if(huso==="AZO"){
    huso = "CV";
    document.getElementById("boton").innerText = "Cabo Verde (GMT - 1 h)";
  }else if(huso==="CV"){
    huso = "BAI";
    document.getElementById("boton").innerText = "Buenos Aires (GMT - 3 h)";
  }else if(huso==="BAI"){
    huso = "NYC";
    document.getElementById("boton").innerText = "Nueva York (GMT - 4 h)";
  }else if(huso==="NYC"){
    huso = "MEX";
    document.getElementById("boton").innerText = "México DF (GMT - 5 h)";
  }else if(huso==="MEX"){
    huso = "DEN";
    document.getElementById("boton").innerText = "Denver (GMT - 6 h)";
  }else if(huso==="DEN"){
    huso = "LA";
    document.getElementById("boton").innerText = "Los Ángeles (GMT - 7 h)";
  }else if(huso==="LA"){
    huso = "FBK";
    document.getElementById("boton").innerText = "Fairbanks (GMT - 8 h)";
  }else if(huso==="FBK"){
    huso = "HON";
    document.getElementById("boton").innerText = "Honolulú (GMT - 10 h)";
  }else if(huso==="HON"){
    huso = "WSA";
    document.getElementById("boton").innerText = "Westsamoa (GMT - 11 h)";
  }else if(huso==="WSA"){
    huso = "WEL";
    document.getElementById("boton").innerText = "Wellington (GMT + 12 h)";
  }else if(huso==="WEL"){
    huso = "NCA";
    document.getElementById("boton").innerText = "New-Caledonia (GMT + 11 h)";
  }else if(huso==="NCA"){
    huso = "SYD";
    document.getElementById("boton").innerText = "Sydney (GMT + 10 h)";
  }else if(huso==="SYD"){
    huso = "DWN";
    document.getElementById("boton").innerText = "Darwin (GMT + 9.30 h)";
  }else if(huso==="DWN"){
    huso = "TOK";
    document.getElementById("boton").innerText = "Tokyo (GMT + 9 h)";
  }else if(huso==="TOK"){
    huso = "BEI";
    document.getElementById("boton").innerText = "Beijing (GMT + 8 h)";
  }else if(huso==="BEI"){
    huso = "JKT";
    document.getElementById("boton").innerText = "Jakarta (GMT + 7 h)";
  }else if(huso==="JKT"){
    huso = "ALM";
    document.getElementById("boton").innerText = "Almaty (GMT + 6 h)";
  }else if(huso==="ALM"){
    huso = "NDE";
    document.getElementById("boton").innerText = "Nueva Delhi (GMT + 5.30 h)";
  }else if(huso==="NDE"){
    huso = "ASH";
    document.getElementById("boton").innerText = "Ashgabad (GMT + 5 h)";
  }else if(huso==="ASH"){
    huso = "MOS";
    document.getElementById("boton").innerText = "Moscú (GMT + 4 h)";
  }else if(huso==="MOS"){
    huso = "HEL";
    document.getElementById("boton").innerText = "Helsinki (GMT + 3 h)";
  }else if(huso==="HEL"){
    huso = "MAD";
    document.getElementById("boton").innerText = "Madrid (GMT + 2 h)";
  }
};

const ajustaReloj = (fecha) => {
  switch(huso){
    case "MAD":
      fecha.setMinutes(fecha.getMinutes() - fecha.getTimezoneOffset());
      break;
    case "LON":
      fecha.setMinutes(fecha.getMinutes() - (-60));
      break;
    case "CV":
      fecha.setMinutes(fecha.getMinutes() - 60);
      break;
    case "BAI":
      fecha.setMinutes(fecha.getMinutes() - 180);
      break;
    case "NYC":
      fecha.setMinutes(fecha.getMinutes() - 240);
      break;
    case "MEX":
      fecha.setMinutes(fecha.getMinutes() - 300);
      break;
    case "DEN":
      fecha.setMinutes(fecha.getMinutes() - 360);
      break;
    case "LA":
      fecha.setMinutes(fecha.getMinutes() - 420);
      break;
    case "FBK":
      fecha.setMinutes(fecha.getMinutes() - 480);
      break;
    case "HON":
      fecha.setMinutes(fecha.getMinutes() - 600);
      break;
    case "WSA":
      fecha.setMinutes(fecha.getMinutes() - 660);
      break;
    case "WEL":
      fecha.setMinutes(fecha.getMinutes() + 720);
      break;
    case "NCA":
      fecha.setMinutes(fecha.getMinutes() + 660);
      break;
    case "SYD":
      fecha.setMinutes(fecha.getMinutes() + 600);
      break;
    case "DWN":
      fecha.setMinutes(fecha.getMinutes() + 570);
      break;
    case "TOK":
      fecha.setMinutes(fecha.getMinutes() + 540);
      break;
    case "BEI":
      fecha.setMinutes(fecha.getMinutes() + 480);
      break;
    case "JKT":
      fecha.setMinutes(fecha.getMinutes() + 420);
      break;
    case "ALM":
      fecha.setMinutes(fecha.getMinutes() + 360);
      break;
    case "NDE":
      fecha.setMinutes(fecha.getMinutes() + 330);
      break;
    case "ASH":
      fecha.setMinutes(fecha.getMinutes() + 300);
      break;
    case "MOS":
      fecha.setMinutes(fecha.getMinutes() + 240);
      break;
    case "HEL":
      fecha.setMinutes(fecha.getMinutes() + 180);
      break;
    default:
      break;
  }
};

root.render(<App/>);