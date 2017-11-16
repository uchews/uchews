const Home = ({clickHandle}) => {

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => clickHandle('input')}>Get Started</button>
    </div>
  )
}


window.Home = Home;