import { Redirect, useHistory } from "react-router-dom";

let loggedIn = true;

function Stocks() {
  const handleClick = () => {
    window.alert('Sending info to the DB!');
    history.push('/')
  }

  let history = useHistory();
  console.log(history)

  if(loggedIn == false){
    return <Redirect to="/not-logged-in"></Redirect>
  }

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;