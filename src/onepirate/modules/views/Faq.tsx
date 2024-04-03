import React, { useState } from 'react';
import './ToggleList.css'; // Estilos CSS do ToggleList

interface FAQItem {
  question: string;
  answer: string;
}

interface ToggleListProps {
  faqItems: FAQItem[];
}

const ToggleList: React.FC<ToggleListProps> = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Fechar se já estiver aberto
    } else {
      setActiveIndex(index); // Abrir se estiver fechado
    }
  };

  return (
    <div className="toggle-list">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => toggleItem(index)}>
            <h3>{item.question}</h3>
            <span className={activeIndex === index ? 'arrow up' : 'arrow down'}></span>
          </div>
          {activeIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default ToggleList;
