import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Contact extends React.Component {
    state = {
        products: [
            { "title": "Product 1", "catID": '101' },
            { "title": "Product 2", "catID": '102' },
            { "title": "Product 3", "catID": '101' },
            { "title": "Product 4", "catID": '103' },
            
        ],
        categories: [
            { "id": "101", "catTitle": 'Category 1' },
            { "id": "102", "catTitle": 'Category 2' },
            { "id": "103", "catTitle": 'Category 3' },
        ]
    }
    getCat = (cid) => {
        let obj = this.state.categories.find(o => o.id === cid);
        return obj.catTitle;

    }
    render() {
        return (
            <div>
                <Header />
                <h1>Contact Page</h1>
                <table border="1">
                    <tr>
                        <th>Product Title</th>
                        <th>Category ID</th>
                        <th>Category Name</th>
                    </tr>
                    {
                        this.state.products.map((val, index) => {
                            return (
                                <tr>
                                    <td>{val.title}</td>
                                    <td>{val.catID}</td>
                                    <td>{ this.getCat(val.catID) }</td>
                                </tr>
                            )
                        })
                    }
                </table>
                <Footer />
            </div>
        )
    }
}

export default Contact;
