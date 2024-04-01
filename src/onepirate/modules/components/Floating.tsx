import React from 'react';
import ReactWhatsappButton from "react-whatsapp-button";

interface LayoutProps {
  children: React.ReactNode;
}

const Floating: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="51"
        phoneNumber="987654321"
        animated
        message="Olá, vim pelo seu site e gostaria de saber mais informações sobre seu trabalho como psicóloga"
      />
    </div>
  );
}

export default Floating;
