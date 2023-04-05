import React, { Component, Fragment } from "react";
import SDetail from "./SDetail";
import Breadcrumb from "./Breadcrumb";
import Related from "./Related";
import Footer from "../home/Footer";
class ShopDetail extends Component {

    render() {

        return (
            <Fragment>
                <Breadcrumb />
                <SDetail />
                <Related />
                <Footer />
            </Fragment>
        )
    }
}
export default ShopDetail