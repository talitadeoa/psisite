import React from 'react';
import { Collapse } from 'antd';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Aceita plano de saúde?',
    answer: 'Atendo convênios através do sistema de reembolso. O reembolso é um direito seu e é regulamentado pela ANS! Funciona de forma simples: Você faz a sessão comigo, efetua o pagamento através de pix, transferência ou cartão de crédito; eu emito seu recibo, e você envia a solicitação de reembolso para seu plano de saúde, através do aplicativo. O plano de saúde pode te reembolsar até 100% do valor e você descobre esse valor perguntando via app ou ligando para a central de atendimento do seu plano. Lembre-se o reembolso é um direito seu, pois você é livre para escolher o profissional no qual mais se identifica. A quantidade de sessões é ilimitada.'
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
    answer: 'Os pagamentos podem ser feitos via pix ou transferência bancária. O pagamento pode ser por um pacote de sessões ou por sessão individual.'
  }
];

const Faq: React.FC = () => {
  return (
    <Box
    component="section"
    sx={{ display: "flex", bgcolor: "#ffffff", overflow: "hidden" }}
  >
      <Container
        sx={{
          mt: 8,
          mb: 5,
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4" marked="center" component="h2" sx={{ mb: 2 }}>
          Perguntas Frequentes
          </Typography>
        </div>
      <div style={{ margin: '60px auto', maxWidth: '1024px' }}>
        <Collapse accordion>
          {faqData.map((item, index) => (
            <Collapse.Panel header={<Typography variant="h5">{item.question}</Typography>} key={index}>
              <Typography variant="h5" sx={{ mb: 2 }}>{item.answer}</Typography>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
      </Container>
    </Box>
  );
};

export default Faq;
