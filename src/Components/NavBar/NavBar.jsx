//Componente
//Con el primer tipo de export, podemos exportar tantas veces deseemos, por defoult, solo uno por archivo

//import "./NavBar.module.css";
//className="containerNav"

//MODULOSs
import style from "./NavBar.module.css";
import imagenes from "../../images/criar-mojarras.png";
//Si la imagen esta en public simplemente utilizo /nombredelaimg"

export const NavBar = () => {
  return (
    <div>
      <h1 className={style.titulo}>NavBar</h1>
      <div style={{ textAlign: "center" }}>
        <img
          style={{ width: "40%", height: "60vh" }}
          src="https://res.cloudinary.com/dohoagwpd/image/upload/v1677194230/samples/ecommerce/car-interior-design.jpg"
          alt=""
        />
        <img src={imagenes} alt="" srcset="" />
      </div>
    </div>
  );
};

/* <div className="containerNav">
<h1>NavBar</h1>
El estilo se aplica con camellCase 
<h2 style={{ color: "red" }}>{name}</h2>
</div> */
// export default NavBar;
//El export por default no necesita las llaves e incluso puede utilizar otro nombre distinto a la función
