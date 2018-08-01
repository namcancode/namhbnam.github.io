

class App extends Component {

  constructor (props) {
    super(props);
    //this.onSetState = this.onSetState.bind(this);
    this.state = {
      products : 
      [{
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
        status: true
      },
      {
        id : 3,
        name : "Samsung Galaxy S8",
        price : "15000000",
        image : "https://cdn1.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-hh-600x600-400x400.jpg",
        status: true
      }
      ],
      isActive : true
    }

  };

  onSetState = () => {
    /* if(this.state.isActive === true) {
      this.setState({
        isActive : false
      });

    }
    else
      {
        this.setState({
          isActive : true
        });
  
      } */
      this.setState({
        isActive : !this.state.isActive
      });
  }


  render() {

    

    var elements = this.state.products.map((product,index) => {
      let result = "";
      if (product.status === true)
      {
        result =  <tr key={index}>
                    <td>{index}</td>
                    <td>{product.name}</td>
                    <td>
                      <span className="label label-success">{product.price}</span>
                      
                    </td>
                  </tr>
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className ="container-fluid">
            <a className ="navbar-brand">State</a>
          </div>
        </nav>
        
        <div className="container">
          <div className="row">
            
            <div className="row">
              
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Ten San Pham</th>
                    <th>Gia</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              
              <button type="button" class="btn btn-danger" onClick={this.onSetState} >
                Active { this.state.isActive +'' }
              </button>
              
            </div>
            
          </div>
        </div>
        
        
        
      </div>
    );
  }
}


