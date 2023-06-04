import cn from "classnames";
import Container from "components/Container";
import Logo from "components/Logo";
import ButtonIcon from "components/ButtonIcon";

import cl from "./Footer.module.scss";
import FooterLink from "./components/FooterLink";

import {ReactComponent as FacebookSVG} from "./static/facebook.svg";
import {ReactComponent as GithubSVG} from "./static/github.svg";
import {ReactComponent as GitlabSVG} from "./static/gitlab.svg";
import {ReactComponent as InstagramSVG} from "./static/instagram.svg";
import {ReactComponent as VkontakteSVG} from "./static/vkontakte.svg";
import {ReactComponent as YoutubeSVG} from "./static/youtube.svg";

const Footer = () => {

  return (
    <div className={cl.footer}>
      <Container className={cl.footer__container}>
        <div>
          <div className={cl.flexAlign}>
            <Logo view="white" className={cl.footer__logo}/>
            <div>
              <h3 className={cl.footer__title}>
                Ссылки на нас:
              </h3>
              <div className={cl.footer__icons}>
                <ButtonIcon icon={<FacebookSVG />}/>
                <ButtonIcon icon={<InstagramSVG />}/>
                <ButtonIcon icon={<VkontakteSVG />}/>
                <ButtonIcon icon={<YoutubeSVG />}/>
                <ButtonIcon icon={<GithubSVG />}/>
                <ButtonIcon icon={<GitlabSVG />}/>
              </div>
            </div>
          </div>
        </div>
        <div className={cl.footer__links}>
          <div>
            <h4 className={cl.footer__subtitle}>О нас</h4>
            <FooterLink path="/info">Что делает наш сервис?</FooterLink>
          </div>
          <div>
            <h4 className={cl.footer__subtitle}>Тем, кто хочет с нами работать</h4>
            <FooterLink path="/info/partner">Партнёрам</FooterLink>
            <FooterLink path="/info/faq">Часто задаваемые вопросы</FooterLink>
            <FooterLink path="/info/support">Техническая поддержка</FooterLink>
          </div>
          <div>
            <h4 className={cl.footer__subtitle}>Компания</h4>
            <FooterLink path="/info/get-job">Устройство на работу</FooterLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;