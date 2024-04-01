import React from 'react';
import WhatsappButton from 'react-whatsapp-button';

interface LayoutProps {
  children: React.ReactNode;
}

const Floating: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <WhatsappButton         
        countryCode="55"
        animated
        phoneNumber="+5511987654321"
        message="Olá! Estou te enviando uma mensagem pelo meu site."/>
    </div>
  );
}


export default Floating;
