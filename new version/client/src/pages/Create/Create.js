import React, { Component } from "react";
import Row from "../../components/Row"

class Create extends Component {
    state = {
      items: []
    }

render() {
    return (
      <div className="container bg-white">
        <h1 className="text-">Create Your Registry</h1>
        <form>
              <div className="form-group">
                <label htmlFor="topic"><h4 >Item</h4></label>
                <input type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="start-year"><h4 >Price</h4></label>
                <input  type="text" className="form-control" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year"><h4 >URL</h4></label>
                <input type="text" className="form-control" id="end-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year"><h4 >Occasion</h4></label>
                <input type="text" className="form-control" id="end-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-year"><h4 >Comments</h4></label>
                <input type="text" className="form-control" id="end-year" />
              </div>
              <button type="submit" className="btn btn-info">Add To Registry</button>
              <button type="submit" className="btn btn-danger">Share Registry</button>

            </form>
        <br></br>
   <h1>This is what I want</h1>
    <table className="table">
        <thead>
            <tr>
          
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">URL</th>
            <th scope="col">Occasion</th>
            <th scope="col">Comments</th>
            <th scope="col">Never Mind</th>
            </tr>
        </thead>
        <tbody>
          <Row 
            item={{
              name: "basketball",
              price: 50,
              url: "www.google.com",
              occasion: "Christmas",
              comments: "Get me a nice one"
            }}
          />
            <tr>
            <th scope="row">item</th>
            <td>Price 1</td>
            <td>URL 1</td>
            <td>Occasion 1</td>
            <td>Comment 1</td>
            <td><button>Never Mind</button></td>
            </tr>
            <tr>
            <th scope="row">Item 1</th>
            <td>Price 1</td>
            <td>URL 1</td>
            <td>Occasion 1</td>
            <td>Comment 1</td>
            <td><button>Never Mind</button></td>
            </tr>
            <tr>
            <th scope="row">Item 1</th>
            <td>Price 1</td>
            <td>URL 1</td>
            <td>Occasion 1</td>
            <td>Comment 1</td>
            <td><button>Never Mind</button></td>
            </tr>
        </tbody>
    </table>
</div>
    );
  }
}

export default Create;