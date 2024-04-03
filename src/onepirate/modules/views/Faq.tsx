import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Aceita plano de saúde?',
    answer: 'Muitos dos meus pacientes possuem plano de saúde, e por isso, optam por atendimento particular via reembolso. Nessa modalidade, você nos paga a sessão e com a nota fiscal que emitimos da consulta, pede a devolução deste valor ao plano de saúde. É um direito seu escolher por quem você quer ser atendido! Para descobrir o valor que seu convênio reembolsa por consulta com psicólogo, ligue na central do seu convenio. A quantidade de sessões é ilimitada.'
  },
  {
    question: 'Como funciona a terapia?',
    answer: 'Cada paciente é único, cada processo também. Em regra geral o processo terapêutico tem duração de 40 à 50 minutos, e frequência semanal. Mas estes são acordos que podem ser alterados, de acordo com cada necessidade do paciente.\n\nÉ recomendável que se organize em um local privativo, que se sinta confortável e seguro para falar. Se possível, para garantir a qualidade da sessão, utilizar fone de ouvido.'
  },
  {
    question: 'Por qual aplicativo acontece a sessão?',
    answer: 'Através da plataforma Google Meet, que é um aplicativo criptografado mantendo a segurança de dados e sigilo.'
  },
  {
    question: 'Como é realizado o pagamento da terapia online?',
    answer: 'Através de transferência bancária, depósito bancário, boleto ou pix. O pagamento pode ser por um conjunto de sessão ou por sessão individual.'
  }
];

const Faq: React.FC = () => {
  return (
    <Collapse accordion>
      {faqData.map((item, index) => (
        <Collapse.Panel header={item.question} key={index}>
          <p>{item.answer}</p>
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default Faq;
