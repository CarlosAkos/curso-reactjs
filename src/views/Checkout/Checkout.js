import CheckoutForm from "../../components/forms/CheckoutForm"
import CheckoutDetail from "../../components/CheckoutDetail/CheckoutDetail"
export default function Checkout(){
    return(
        <>
            <div className="checkoutDisplay">
                <CheckoutForm />
                <CheckoutDetail/>
            </div>
        </>
    )

}