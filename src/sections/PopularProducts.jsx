import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Seus <span className="text-coral-red ">Produtos</span> Populares
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          Experimente qualidade e estilo de alto nível com nossas procuradas
          seleções. Descubra um mundo de conforto, design e valor
        </p>
      </div>
      <div className="mt-16 grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
