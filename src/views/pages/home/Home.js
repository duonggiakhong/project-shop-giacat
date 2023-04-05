import React, { Fragment } from "react";
// import Header from "./Header";
import Carousel from "./Carousel";
import Featured from "./Featured";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Offer from "./Offer";
import RecentProducts from "./RecentProducts";
import Vendor from "./Vendor";
import Footer from "./Footer";

class Home extends React.Component {

    render() {

        return (
            <Fragment>
                {/* <Header /> */}
                <Carousel />
                <Featured />
                <Categories />
                <FeaturedProducts />
                <Offer />
                <RecentProducts />
                <Vendor />
                <Footer />
            </Fragment>
        )
    }
}
export default Home
