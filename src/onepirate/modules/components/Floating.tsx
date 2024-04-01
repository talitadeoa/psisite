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
        phoneNumber="+85998026288"
        message="Olá! Vim pelo seu site e gostaria de saber mais informações sobre seu trabalho como psicóloga"/>
    </div>
  );
}


export default Floating;
