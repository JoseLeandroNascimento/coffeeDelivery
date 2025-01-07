
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { DefaultLayout } from "./pages/layout/defaultLayout"
import { PaymentPage } from "./pages/payment"
import { DeliveryPage } from "./pages/delivery"


export function PagesRouter() {

    return (

        <Routes>
            <Route path="" element={<DefaultLayout/>} >
                <Route path="" element={<HomePage/>} />
                <Route path="payment" element={<PaymentPage/>} />
                <Route path="delivery" element={<DeliveryPage/>} />
            </Route>
        </Routes>

    )

}