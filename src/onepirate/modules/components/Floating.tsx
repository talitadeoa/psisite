import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

interface LayoutProps {
  children: React.ReactNode;
}

const Floating: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <FloatingWhatsApp phoneNumber="5584998026288" accountName="Talita" />
    </div>
  );
}

export default Floating;
