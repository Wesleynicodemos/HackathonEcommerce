
import extendedLogo from '../../public/images/home/footer-extended-logo.webp'
import x from '../../public/icons/home/footer-x.svg'
import whatsapp from '../../public/icons/home/footer-whats.svg'
import facebook from '../../public/icons/home/footer-face.svg'
import instagram from '../../public/icons/home/footer-insta.svg'
import footerPayment from '../../public/images/home/footer-payment-methods.webp'

import * as s from './styles'

const Footer = ()=> {

    return (
      <s.Footer>
        <s.Container>
            <div>
                <img className='FooterLogo'src={extendedLogo} alt=""/>
            </div>
            <s.Socials>
              <img src={x} alt="Ícone rede social X" />
              <img src={whatsapp} alt="Ícone whatsapp" />
              <img src={facebook} alt="Ícone facebook" />
              <img src={instagram} alt="ícone instagram" />
        </s.Socials>
            
        </s.Container>
        <div className="FooterText">
        <s.Categories>
          <s.H1>Categorias</s.H1>
          <s.OtherP>Brinquedos</s.OtherP>
          <s.OtherP>Camisas</s.OtherP>
          <s.OtherP>Canecas</s.OtherP>
          <s.OtherP>Games</s.OtherP>
          <s.OtherP>Livros</s.OtherP>
        </s.Categories>
        <s.Institutional>
        <s.H1>Institucional</s.H1>
          <s.OtherP>Encontrar Lojas</s.OtherP>
          <s.OtherP>Nossa Historia</s.OtherP>
          <s.OtherP>Trabalhe Conosco</s.OtherP>
        </s.Institutional>
        <s.Service>
          <s.H1>Atendimento</s.H1>
          <s.P>Segunda à sexta das 9h às 19h exceto feriados (horario de Brasilia).</s.P>
        </s.Service>
        </div>
        <s.Rights>Copyright &copy; 2024 Felicità Comércio. Todos os Direitos Reservados.</s.Rights>
        <div className='FooterPayment'>
          <img src={footerPayment} alt="" />
        </div>
      </s.Footer>
      
     )
}

export default Footer