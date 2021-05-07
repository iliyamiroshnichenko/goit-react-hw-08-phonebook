import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [state, setState] = useState(initialState);
  const { name, email, password } = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState(initialState);
  };
  return (
    <div>
      <h1>Hello, this is a Register Page!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={name}
            required
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
