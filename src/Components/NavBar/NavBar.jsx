//Componente
//Con el primer tipo de export, podemos exportar tantas veces deseemos, por defoult, solo uno por archivo

//import "./NavBar.module.css";
//className="containerNav"

//MODULOS
import style from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
      <h1 className={style.titulo}>NavBar</h1>
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
