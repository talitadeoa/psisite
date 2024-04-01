import React from 'react';
import WhatsappButton from 'react-whatsapp-button';

const Floating: React.FC = () => {
  return (
    <div>
      <h1>Meu Site React</h1>
      <WhatsappButton
        countryCode="55"
        animated
        phoneNumber="+5511987654321"
        message="Olá! Estou te enviando uma mensagem pelo meu site."
      />
    </div>
  );
}

export default Floating;
