import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold ">
          Nós fornecemos a você <span className="text-coral-red"> Super </span><span className="text-coral-red"> Qualidade </span>
          nos Tênis
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantindo conforto e estilo premium, nossos calçados meticulosamente
          elaborados foi projetado para elevar sua experiência,
          proporcionando-lhe uma experiência incomparável qualidade, inovação e
          um toque de elegância.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nossa dedicação ao detalhe e excelência garante sua satisfação
        </p>
        <div className="mt-11 ">
          <Button label="Ver Detalhes" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>

      </div>
    </section>
  );
};

export default SuperQuality;
