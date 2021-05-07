import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState(initialState);
  };
  return (
    <div>
      <h1>Hello, this is a Login Page!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
