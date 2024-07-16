import "./banner.css";
import imgbanner from  "../../assets/imgbanner.jpg"

const Banner = ({video}) => {
  return (
    <div className="banner">
      <div className="informacion_banner">
      <div className="seccion_banner">
        <h1 className="titulo_banner">FRONT-END</h1>
        <h3 className="subtitulo_banner">Challenge React</h3>
        <p className="texto_banner">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="image_banner">
        <img src={imgbanner} alt="imagen del banner" className="img_banner" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
