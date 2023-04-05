import React, { Component, Fragment } from "react";
import axios from "axios";
class DemoTest extends Component {

    state = {
        chagagoi: [
            // { aManDo: "" },
            // { googNight: "" },
        ]
    }

    async componentDidMount() {
        ////Check dữ liệu data tồn tại
        axios.get('https://api.spacexdata.com/v3/launches/past')
            .then(res => {
                console.log("check empty object: ", res)
            })


        //     let res = await axios.get('https://reqres.in/api/users?page=1');
        //     this.setState({
        //         listUsers: res && res.data && res.data.data ? res.data.data : []
        //     })
    }



    render() {

        return (
            <Fragment>
                test
            </Fragment>
        )
    }
}
export default DemoTest