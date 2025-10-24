import { useState } from 'react';
import { FaQuestionCircle } from "react-icons/fa";

export function TabsWidget({ className = "" }) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  const content = {
    about: [
      "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
      "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a..."
    ],
    experiences: [
      "Throughout my career at Salesforce, I've had the opportunity to work with numerous clients across various industries. I specialize in cloud solutions and have helped companies transform their sales processes.",
      "Key achievements include closing deals worth over $5M and maintaining a 95% customer satisfaction rate. I'm passionate about building long-term relationships with clients."
    ],
    recommended: [
      "I highly recommend exploring our latest cloud solutions and CRM integrations. These tools have proven invaluable for businesses looking to scale their operations.",
      "Connect with me on LinkedIn or schedule a demo to see how we can help your business grow. I'm always happy to share insights and best practices from my experience."
    ]
  };

  return (
    <div className={`bg-[#363C43] rounded-lg shadow-md p-4 md:p-6 ${className}`}>
      <div className='relative flex flex-wrap md:flex-nowrap gap-1 md:gap-2 p-1 bg-[#171717] rounded-2xl mx-auto'
           style={{ width: 'fit-content', marginTop: '17px' }}>
        
        <div className=" bg-transparent absolute left-5 md:-left-20 top-3/4 md:top-3/4 transform -translate-y-1/2  w-6 h-6 md:w-6 md:h-6 rounded-full flex items-center justify-center hover:bg-[#5A5E64] cursor-pointer shadow-lg">
          <FaQuestionCircle className=" w-3 h-3 md:w-3 md:h-5" />
        </div>

        {tabs.map((tab) => (
          <button 
            key={tab.id} 
            onClick={() => setActiveTab(tab.id)} 
            className={`shadow-lg shadow-cyan-500/50 px-4 md:px-6 py-1.5 md:py-2 rounded-lg active:scale-95 transition-all duration:300 ease-in-out
              ${activeTab === tab.id 
                ? "bg-[#28292F] text-white shadow" 
                : "text-[#A3ADB2] hover:text-white"}`}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mx-4 mt-6 mb-4">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#282828] to-transparent rounded-full shadow" />
        
      </div>

      <div className="px-2 md:px-6 pb-8">
        <div className="text-[#969696] leading-relaxed whitespace-pre-line max-h-[175px] overflow-y-auto">
          {content[activeTab].map((line, index) => (
            <p key={index} className='mb-2'>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
