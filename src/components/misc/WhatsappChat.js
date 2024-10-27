import tw from 'twin.macro';
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp-logo.svg";

const WhatsAppSection = tw.div`fixed right-0 cursor-pointer bottom-0 mb-2 mr-2 z-10 flex items-center md:bg-white rounded-6xl py-2 px-3`;


const WhatsAppIconContainer = tw.span`w-10 h-10 flex justify-center items-center`;



const chatUrl = 'https://wa.me/' + process.env.REACT_APP_WHATSAPP_BUSINESS_PHONE_NUMBER + '?text=Hello'

console.log('THE Unan ere', chatUrl);


const handleWhatsappChat = () => window.open(chatUrl, '_blank')


const WhatsAppInfo = tw.div`ml-2 md:block hidden`;

const WhatsAppChatSection = () => {
  return (
    <WhatsAppSection onClick={handleWhatsappChat}>
      <WhatsAppIconContainer>
        <WhatsAppIcon />
      </WhatsAppIconContainer>
      <WhatsAppInfo>
        <div style={{fontWeight : 'bold'}}>WhatsApp</div>
        <div tw="text-xs" style={{color :  '#25D366'}}>Click to Chat</div>
      </WhatsAppInfo>
    </WhatsAppSection>
  );
};

export default WhatsAppChatSection