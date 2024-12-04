import React from "react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "9266404473";
    const message = "Hello! I would like to know more about your services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="z-10 fixed bottom-4 right-4 flex items-center p-3 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-lg"
    >
      <img src="whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
