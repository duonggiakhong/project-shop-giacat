import React, { Fragment } from "react";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import ShopProduct from "./ShopProduct";
import Footer from "../home/Footer";

class Shop extends React.Component {

    render() {

        return (
            <Fragment>
                <Breadcrumb />


                {/* <!-- Shop Start --> */}
                <div className="container-fluid">
                    <div className="row px-xl-5">
                        <Sidebar />
                        <ShopProduct />
                    </div>
                </div>
                {/* <!-- Shop End-- > */}
                <Footer />
            </Fragment >
        )
    }
}
export default Shop