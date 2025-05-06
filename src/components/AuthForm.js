import './AuthForm.css';
import { useState } from 'react';

export default function AuthForm({ type }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`${type === 'signin' ? 'Signing in' : 'Signing up'} with ${email} and password: ${password}`);
  }
  

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{type === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
      <input
        type="email"
        placeholder="Email"
        required
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">{type === 'signin' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}
