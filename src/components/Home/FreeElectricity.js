"use client";
import React, { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import logo1 from "../../../public/subsidy 1.png";
import logo2 from "../../../public/solar-energy 1.png";
import logo3 from "../../../public/pngegg (9) 1.png";
import logo4 from "../../../public/Green_economic.png";
import Image from "next/image";

export const FreeElectricity = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      id: 1,
      logo: logo1,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 2,
      logo: logo2,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 3,
      logo: logo3,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 4,
      logo: logo4,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 5,
      logo: logo3,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 6,
      logo: logo4,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 7,
      logo: logo3,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
    {
      id: 8,
      logo: logo4,
      title: "वित्तीय सहायता और पर्याप्त सब्सिडी",
      description:
        "इस योजना के लाभार्थियों को भारी रियायती बैंक ऋण तक की पहुंच के साथ-साथ सीधे उनके बैंक खाते में सब्सिडी मिलेगी, जिससे यह सुनिश्चित किया जाएगा कि व्यक्तियों पर लागत का कोई बोझ नहीं हो।",
    },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl p-2 md:text-[40px]  mt-8 mb-5 font-bold text-[#00237D]">
        Pradhan Mantri Surya Ghar Muft Bijli Yojana
      </h1>
      <div className="text-center">
        <div className="flex items-center justify-center mx-auto mb-4 p-4">
          <iframe
            width="750"
            height="380"
            src="https://www.youtube.com/embed/f54Ei-gz-UU"
            title="solar energy stock video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-auto text-center text-wrap w-full">
          <p className="font-semibold text-center">
            PM Surya Ghar Muft Bijli Yojana का उद्देश्य
          </p>
          <h1 className="w-[70%] mx-auto text-[15px] md:text-lg font-medium">
            PM Surya Ghar Muft Bijli Yojana के जरिए 1 करोड़ घरो को हर महीने 300
            यूनिट बिजली मुफ्त दि जाएगी इस योजना से 1 करोड़ परिवारों को सालाना
            15000 करोड़ कि बचत होगी और वे सरप्लस पॉवर अपने शेत्र कि बिजली वितरण
            कम्पनियों (DISCOM) को बेच कर आय अर्जित कर सकेंगे| इस योजना से
            इलेक्ट्रिकल व्हीकल चार्जिंग कि सुविधा बढेगी सोलर पैनल सप्लाई और
            इंस्टालेशन के जरिए बहुत अधिक मात्रा मे वेंडर्स के लिए उद्यमी बनाने
            के अवसर पैदा होंगे| साथ हि सोलर पैनल मैन्युफैक्चरिंग इंस्टालेशन और
            मेंटनेंस मे टेक्निकल स्किल्ड वाले युवाओ के लिए भरपूर रोजगार के अवसर
            पैदा होंगे|
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto w-[80%] mt-8">
        {cards.slice(0, showAll ? cards.length : 4).map((card) => (
          <Card key={card.id} className="flex items-center p-5 mt-4 ">
            <Image src={card.logo} className="w-11 mb-2" />
            <h2 className="text-base font-semibold w-44 text-center mb-2 text-[#00237D]">
              {card.title}
            </h2>
            <p className="text-sm font-medium w-44 leading-6">
              {card.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border border-[#357CCA] font-bold bg-white"
        >
          {showAll ? "Learn Less!" : "Learn More!"}
        </Button>
      </div>
    </div>
  );
};
