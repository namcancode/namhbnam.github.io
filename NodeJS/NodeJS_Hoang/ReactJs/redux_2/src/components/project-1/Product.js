import React, { Component } from 'react';


class Product extends Component {

  constructor(props) {
      super(props);
      console.log(props);                              // RECOMMENDED
      this.onAddToCart = this.onAddToCart.bind(this); // bind this function into class's prototype so it can 
                                                      // be used like this : super.doSomeThing()
      
  }

  onAddToCart() {
    
    alert(this.props.children+"-"+this.props.price);
    
  }
  onAddToCart2 = () => {
    
    alert(this.props.children+"-"+this.props.price);   // NOT RECOMMENDED
    
  }

  render() {
    return (
        
        <div>
            
          
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="thumbnail">
                <img  alt={this.props.children} src={this.props.image}/>
                <div className="caption">
                        
                <h3>{this.props.children}</h3>
                <p>
                {this.props.price} VND
                </p>
                <p>
                    <a  className="btn btn-primary"onClick={this.onAddToCart} >Dat hang</a>
                    <a  className="btn btn-primary"onClick={this.onAddToCart2} >Dat hang</a>
                </p>
                    </div>
              </div>
          </div>
          
            
        </div>
    );
  }
}

export default Product;