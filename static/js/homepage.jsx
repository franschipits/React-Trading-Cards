'use strict';

function Homepage() {
  return <div>
    <h1>Welcome to our page!</h1>
    <a href = "/cards">Click here to view the trading cards.</a>
    <br/>
    <img src = "static/img/balloonicorn.jpg" id = "baloonicorn"/>
  
  </div>;
}
/// static/img/balloonicorn.jpg
ReactDOM.render(<Homepage />, document.querySelector('#app'));
