const Login = ({clickHandle}) => {
  return (
    <div>
      <h1>Login</h1>
      <h3>username</h3>
      <input type="text"/>
      <h3>password</h3>
      <input type="text"/>
      <div>
        <button onClick={() => clickHandle('home')}>login</button>
        <button onClick={() => clickHandle('signup')}>signup</button>
      </div>
    </div>
  )
}

window.Login = Login;