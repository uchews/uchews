import React from 'react';

const Signup = () => {
  return (
    <form action="/signup" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username"/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password"/>
      </div>
      <div>
        <input type="submit" value="Signup"/>
      </div>
    </form>
  )
}

export default Signup;