import React, { useState } from 'react';
import axios from 'axios'; // Pamiętaj, aby zaimportować axios

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
      const response = await axios.post('https://truckcodes.pl/api/send-meil', formData);
      console.log(response.data);
      setResponseMessage('Wiadomość została wysłana pomyślnie.'); // Ustawienie komunikatu sukcesu
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Wystąpił błąd podczas wysyłania wiadomości.'); // Ustawienie komunikatu o błędzie
    } finally {
      console.log('ok');
    }
  }    

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
