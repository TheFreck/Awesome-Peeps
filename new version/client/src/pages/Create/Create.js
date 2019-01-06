import React, { Component } from "react";
import Row from "../../components/Row"
import API from "../../utils/API"
import RegistryHeader from "../../components/RegistryHeader"

class Create extends Component {
    state = {
      savedItems: [],
      item: "",
      price: 0,
      url: "",
      occasion: "",
      comments: ""
    }

    getSavedItems = () => {
      API.getItems()
        .then(res =>
          this.setState({ savedItems: res.data })
        )
        .catch(err => console.log(err));
    };

    deleteItem = (id) => {
      API.deleteItem(id)
        .then(res =>
          this.getSavedItems())
        .catch((err) => {
          console.log(err);
        });
    };

    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

      handleSaveItem = event => {
        event.preventDefault();
        console.log("CLICK")
        if (this.state.item) {
          API.saveItem({
            item: this.state.item,
            price: this.state.price,
            url: this.state.url,
            occasion: this.state.occasion,
            comments: this.state.comments
          })
            .then(res => {
              console.log("save item response: ", res);
              this.getSavedItems();
            })
            .catch(err => console.log(err));
        }
      };

    handleURL = (event) => {
      this.setState({ url: event.target.value });
    }

    handlePrice = (event) => {
      this.setState({ price: event.target.value });
    }

    handleOccasion = (event) => {
      this.setState({ occasion: event.target.value });
    }

    handleComments = (event) => {
      this.setState({ comments: event.target.value });
    }

    renderSaved = () => {
      return this.state.savedItems.map(save => (
        <Row
          _id={save._id}
          key={save._id}
          item={save.item}
          price={save.price}
          url={save.url}
          occasion={save.occasion}
          comments={save.comments}
          deleteItem={this.deleteItem}
          getSavedArticles={this.getSavedArticles}
        />
      ))
    }  


render() {
    return (
      <div className="container bg-white">
        <h1 className="text-">Create Your Registry</h1>
        <form>
              <div 
                className="form-group"
              >
                <label htmlFor="item"><h4 >Item</h4></label>
                <input
                  onChange={this.handleChange} 
                  name="item" 
                  value={this.state.item}
                  type="text" 
                  className="form-control" id="item" aria-describedby="emailHelp" 
                />
              </div>
              <div 
                className="form-group"
              >
                <label htmlFor="price"><h4 >Price</h4></label>
                <input
                  onChange={this.handleChange} 
                  name="price" 
                  value={this.state.price}
                  type="text" 
                  className="form-control" id="price" 
                />
              </div>
              <div 
                className="form-group"
              >
                <label htmlFor="url"><h4 >URL</h4></label>
                <input
                  onChange={this.handleChange} 
                  name="url" 
                  value={this.state.url}
                  type="text" 
                  className="form-control" id="url" 
                />
              </div>
              <div 
                className="form-group"
              >
                <label htmlFor="occasion"><h4 >Occasion</h4></label>
                <input
                  onChange={this.handleChange} 
                  name="occasion" 
                  value={this.state.occasion}
                  type="text" 
                  className="form-control" id="occasion" 
                />
              </div>
              <div 
                className="form-group"
              >
                <label htmlFor="comments"><h4 >Comments</h4></label>
                <input
                  onChange={this.handleChange} 
                  name="comments" 
                  value={this.state.comments}
                  type="text" 
                  className="form-control" id="comments" 
                />
              </div>
              <button onClick={this.handleSaveItem} type="submit" 
              className="btn btn-info">Add To Registry</button>
              {/* <button type="submit" className="btn btn-danger">Share Registry</button> */}

            </form>
        <br></br>
    <RegistryHeader />
    <div>
    {this.renderSaved()}

    </div>
   
   {/* <h1>This is what I want</h1> */}
    {/* <table className="table">
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
        <tbody> */}
          {/* <Row 
            item={{
              item: this.state.item,
              price: this.state.price,
              url: this.state.url,
              occasion: this.state.occasion,
              comments: this.state.comments
            }} */}
            {/* { {this.renderSaved()}
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
    </table> */}
</div>
    ); }
  }


export default Create;