// react-whatsapp-button.d.ts

declare module 'react-whatsapp-button' {
    import { FC } from 'react';
  
    interface WhatsAppButtonProps {
      countryCode: string;
      phoneNumber: string;
      message: string;
      animated: boolean
    }
  
    const WhatsAppButton: FC<WhatsAppButtonProps>;
  
    export default WhatsAppButton;
  }
  