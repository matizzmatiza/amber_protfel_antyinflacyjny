import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('send_email.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setResponseMessage(result.message);
    } catch (error) {
      setResponseMessage(`Wystąpił błąd podczas wysyłania wiadomości. ${error}`);
    }
  };

  return (
    <form className='form-1' onSubmit={handleSubmit}>
      <div>
        <label className='form-1-label'>Imię i nazwisko:</label>
        <input className="form-1-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className='form-1-label'>Adres e-mail:</label>
        <input className="form-1-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className='form-1-label'>Wiadomość:</label>
        <textarea className="form-1-input form-1-textarea" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button type="submit">Wyślij</button>
      {responseMessage && <p className='respond-message'>{responseMessage}</p>}
    </form>
  );
}

export default Form;
