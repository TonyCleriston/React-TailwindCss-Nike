import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
   <section className="max-container">
    <h3 className="font-palanquin text-center text-4xl font-bold ">
    o que nossos <span className="text-coral-red "> clientes </span> dizem?
</h3>
<p className="info-text m-auto mt-4 max-w-lg text-center">
Ouça histórias genuínas de nossos clientes satisfeitos sobre seus
        experiências excepcionais conosco.
</p>
<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
  {reviews.map((review) => (
    <ReviewCard
    key={review.customerName}
    imgURL={review.imgURL}
    customerName={review.customerName}
    rating={review.rating}
    feedback={review.feedback}


    />
  ))}

</div>

   </section>
  )
}

export default CustomerReviews