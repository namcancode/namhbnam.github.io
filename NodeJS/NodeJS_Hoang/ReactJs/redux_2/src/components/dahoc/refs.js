
class App extends Component {

  constructor (props) {
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onClick() {
    console.log('day la app');
    
  } 
  onClick2(txt) {
    console.log(txt);
    
  } 
  onAddProduct() {
    console.log(this.refs.name.value);
  }
/*   onAddProduct = () => {
    console.log(this.refs.name.value);
    
  } */


  render() {

    var Aproducts = [{
      id : 1,
      name : "Apple Iphone 7 Plus",
      price : "16000000",
      image : "https://cdn4.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-hh-600x600.jpg",
      status: true
    },
    {
      id : 2,
      name : "Apple Iphone 8",
      price : "18000000",
      image : "https://cdn3.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-400x400.jpg",
      status: false
    },
    {
      id : 3,
      name : "Samsung Galaxy S8",
      price : "15000000",
      image : "https://cdn1.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-hh-600x600-400x400.jpg",
      status: true
    }
    ];

    var elements = Aproducts.map((product,index) => {
      let result = "";
      if (product.status === true)
      {
        result = <Product
                    key = {product.id} 
                    price = {product.price} 
                    image = {product.image}  
                  >
                    {product.name}
                  </Product>
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className ="container-fluid">
            <a className ="navbar-brand">Props</a>
          </div>
        </nav>
        
        <div className="container">
          <div className="row">
            
            <div className="row">
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                  <div className="panel panel-danger">
                      <div className="panel-heading">
                        <h3 className="panel-title">Them san pham</h3>
                      </div>
                      <div className="panel-body">
                          <div className="form-group">
                            <label >Ten san pham</label>
                            <input type="text" className="form-control" id="" placeholder="Input field" ref ="name" />
                          </div>

                          <button type="submit" className="btn btn-primary" onClick = {this.onAddProduct} >Submit</button>

                      </div>
                  </div>

              </div>
              

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {elements}
                </div>
                
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                  <button type="button" className="btn btn-warning" onClick={this.onClick} >
                    Click me!
                  </button>
                  <button type="button" className="btn btn-warning" onClick={() => {this.onClick2('ABC')}} >
                    Click me!
                  </button>
                  
                </div>
                
                
              </div>
              

            </div>
            
          </div>
        </div>
        
        
        
      </div>
    );
  }
}


