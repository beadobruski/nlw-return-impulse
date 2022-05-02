import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen);
    // valor atual: se está aberto ou não e vai SETAR
    // o valor contrário dele
  }

  return (
    <div className="absolute bottom-5 right-5">
      {isWidgetOpen && <p>Hello Houston.</p>}
      {/*  se isWidgetOpen for TRUE, só assim ele executa a 2nd parte. ===> && (2x E comercial)*/}

      <button
        onClick={toggleWidgetVisibility}
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  );
}
