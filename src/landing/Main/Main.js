import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MiniSearch from "widgets/MiniSearch"

// import Header from "./components/Header";
// import Template from "./components/Template";

import "global/style.css";

import logo from "global/images/logo.svg";
import group from "global/images/group.png";
import logoDark from "global/images/logo-dark.svg";
import integratedMarketing from "global/images/integrated-marketing.svg";
import designDevelopment from "global/images/design-development.svg";
import digitalStrategy from "global/images/digital-strategy.svg";
import digitalMarketing from "global/images/digital-marketing.svg";
import growthStrategy from "global/images/growth-strategy.svg";
import savingStrategy from "global/images/saving-strategy.svg";
import tick from "global/images/tick.png";
import idea from "global/images/idea.png";
import cert from "global/images/cert.jpg";
import slider1 from "global/images/carousel/slider1.jpg";
import slider2 from "global/images/carousel/slider2.jpg";
import slider3 from "global/images/carousel/slider3.jpg";
import slider4 from "global/images/carousel/slider4.jpg";
import slider5 from "global/images/carousel/slider5.jpg";
import book1 from "global/images/carousel/book1.jpg";
import book2 from "global/images/carousel/book2.jfif";
import book3 from "global/images/carousel/book3.jfif";
import book4 from "global/images/carousel/book4.jpg";
import book5 from "global/images/carousel/book5.jpg";
import satisfiedClient from "global/images/satisfied-client.svg";
import finishedProject from "global/images/finished-project.svg";
import teamMembers from "global/images/team-members.svg";
import ourBlogPosts from "global/images/our-blog-posts.svg";
import testimonial1 from "global/images/testimonial/testimonial1.jpg";
import testimonial2 from "global/images/testimonial/testimonial2.jpg";
import testimonial3 from "global/images/testimonial/testimonial3.jpg";
import testimonial4 from "global/images/testimonial/testimonial4.jpg";

import netflix from "global/images/netflix.svg";
import instagram from "global/images/instagram.svg";
import coinbase from "global/images/coinbase.svg";
import alibLogo from "global/images/competitor/alib.png";
import alibText from "global/images/competitor/alib.jpg";
import libex from "global/images/competitor/libex.jpg";
import ozon from "global/images/competitor/ozon.png";
import rusbuk from "global/images/competitor/rusbuk.png";

import starter from "global/images/starter.svg";
import proffessional from "global/images/proffessional.svg";
import premium from "global/images/premium.svg";
import contact from "global/images/contact.jpg";

// const Main = () => {
//   return (
//     <body data-spy="scroll" data-target=".navbar" data-offset="50">
//       <div id="mobile-menu-overlay"></div>
//       <Header />
//       <Template />
//     </body>
//   )
// }


const Main = () => {
  return (
    <body data-spy="scroll" data-target=".navbar" data-offset="50">
      <div id="mobile-menu-overlay"></div>
      
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/app">Букич</Link>
          {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"*/}
          {/*        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">*/}
          {/*  <span className="navbar-toggler-icon"><i className="mdi mdi-menu"> </i></span>*/}
          {/*</button>*/}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
              <img src={logoDark} className="logo-mobile-menu" alt="logo" />
                <a href="javascript:;" className="close-menu"><i className="mdi mdi-close"></i></a>
            </div>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item active">
                <a className="nav-link" href="#home">О нас<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#search">Поиск книги</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Преимущества</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Сертификат</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Хиты</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Комментарии</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-success" href="#contact">✆ Тех. поддержка</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-body-wrapper">
        {/* Описание */}
        <section id="home" className="home">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="main-banner">
                  <div className="d-sm-flex justify-content-between">
                    <div data-aos="zoom-in-up">
                      <div className="banner-title">
                        <h3 className="font-weight-medium">
                          Букич - это сервис поиска и продажи поддержанной литературы
                        </h3>
                      </div>
                      <p className="mt-3">
                        <p>✓ Покупка и продажа книг</p>
                        <p>✓ Поиск редких книг (антиквариат,  издания, комиксы, научная литература)</p>
                        <p>✓ Создание вовлеченного коммьюнити в тематику книг</p>
                      </p>
                      {/*<a href="#" className="btn btn-secondary mt-3">Узнать больше</a>*/}
                      <div>
                        <Link to="shop-counter" className="btn btn-secondary mt-3" style={{marginRight: '15px'}}>Перейти в само приложение</Link>
                        <Link to="info" className="btn btn-secondary mt-3">Узнать больше</Link>
                      </div>
                    </div>
                    <div className="mt-5 mt-lg-0">
                      <img src={group} alt="marsmello" className="img-fluid" data-aos="zoom-in-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-services" id="search">
          <div className="container">
            {/*<MiniSearch*/}
            {/*  tags={tags}*/}
            {/*  books={books}*/}
            {/*  genres={genres}*/}
            {/*  currentGenre={currentGenre}*/}
            {/*  onSearch={onSearch}*/}
            {/*  onSelectGenre={onSelectGenre}*/}
            {/*/>*/}
            {/* Контейнер внутри MiniSearch - widget, который может переиспользоваться по всему приложению*/}
            <MiniSearch />
          </div>
        </section>

        <section className="our-services" id="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/*<h5 className="text-dark">We’re offering</h5>*/}
                <h3 className="font-weight-medium text-dark mb-5">Преимущества сервиса в сравнении с конкурентами</h3>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <img src={integratedMarketing} alt="integrated-marketing" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Фильтрация книг жанрам, разделам,темам
                  </h6>
                  <p>
                    Конкурентное приемущство от Авито наличем категорий, разделов и гибким фильтром
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <img src={designDevelopment} alt="design-development" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Удобный интерфейс
                  </h6>
                  <p>
                    В отличии от других сервисов дизайн которых остался в 00- х, наш сервис предоставлет удобное взаимодествие
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <img src={digitalStrategy} alt="digital-strategy" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Круглосуточная тех поддержка
                  </h6>
                  <p>
                    Если возникнут вопросы не стесняйтесь задавать их
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box  pb-lg-0" data-aos="fade-down" data-aos-easing="linear"
                     data-aos-duration="1500">
                  <img src={digitalMarketing} alt="digital-marketing" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Безопасность сделки
                  </h6>
                  <p>
                    Объявления размещённые на сайте гарантируют безопасность сделки и, в случае несостоявшейся сделки - возрат средств
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box pb-lg-0" data-aos="fade-down" data-aos-easing="linear"
                     data-aos-duration="1500">
                  <img src={growthStrategy} alt="growth-strategy" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Мы - молодой стартап!
                  </h6>
                  <p>
                    Команда сформировано недавно и мы полны и заряжены мотивацией
                  </p>
                </div>
              </div>
              <div className="col-sm-4 text-center text-lg-left">
                <div className="services-box pb-0" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                  <img src={savingStrategy} alt="saving-strategy" data-aos="zoom-in" />
                  <h6 className="text-dark mb-3 mt-4 font-weight-medium">
                    Гарантия
                    чистой сделки
                  </h6>
                  <p>
                    Мы планируем коллаборироваться с крупными платежными системами, такие как Тинькофф,СберБанк,Альфа-банк,Юмани
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-process" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-6" data-aos="fade-up">
                <h5 className="text-dark">Сертифицированность сервиса = доверие клиента</h5>
                <h3 className="font-weight-medium text-dark">Безопасность сделки</h3>
                <h5 className="text-dark mb-3">Ни один аналогов данного сервиса не даёт гаранта пользователю на приобритение редкой книги</h5>
                <p className="font-weight-medium mb-4">
                  Мы предлагаем следующие возможности
                </p>
                <div className="d-flex justify-content-start mb-3">
                  <img src={tick} alt="tick" className="mr-3 tick-icon" />
                  <p className="mb-0">Безопасность сделки</p>
                </div>
                <div className="d-flex justify-content-start mb-3">
                  <img src={tick} alt="tick" className="mr-3 tick-icon" />
                  <p className="mb-0">Возрат средств, в случае несостоявшейся сделки</p>
                </div>
                <div className="d-flex justify-content-start">
                  <img src={tick} alt="tick" className="mr-3 tick-icon" />
                  <p className="mb-0">Компенсация средств</p>
                </div>
              </div>
              <div className="col-sm-6 text-right" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                   data-aos-duration="2000">
                <img src={cert} alt="Сертификат" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="our-projects" id="projects">
          <div className="container">
            <div className="row mb-5">
              <div className="col-sm-12">
                <div className="d-sm-flex justify-content-between align-items-center mb-2">
                  <h3 className="font-weight-medium text-dark ">Хиты недели антиквариата</h3>
                  <div><a href="#" className="btn btn-outline-primary">Посмотреть больше</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5" data-aos="fade-up">
            <div className="owl-carousel-projects owl-carousel owl-theme">
              <div className="item">
                <img src={book1} alt="slider" />
              </div>
              <div className="item">
                <img src={book2} alt="slider" />
              </div>
              <div className="item">
                <img src={book3} alt="slider" />
              </div>
              <div className="item">
                <img src={book4} alt="slider" />
              </div>
              <div className="item">
                <img src={book5} alt="slider" />
              </div>
              <div className="item">
                <img src={book1} alt="slider" />
              </div>
              <div className="item">
                <img src={book2} alt="slider" />
              </div>
              <div className="item">
                <img src={book3} alt="slider" />
              </div>
              <div className="item">
                <img src={book4} alt="slider" />
              </div>
              <div className="item">
                <img src={book5} alt="slider" />
              </div>
              <div className="item">
                <img src={book1} alt="slider" />
              </div>
              <div className="item">
                <img src={book2} alt="slider" />
              </div>
              <div className="item">
                <img src={book3} alt="slider" />
              </div>
              <div className="item">
                <img src={book4} alt="slider" />
              </div>
              <div className="item">
                <img src={book5} alt="slider" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row pt-5 mt-5 pb-5 mb-5">
              <div className="col-sm-3">
                <div className="d-flex py-3 my-3 my-lg-0 justify-content-center" data-aos="fade-down">
                  <img src={satisfiedClient} alt="satisfied-client" className="mr-3" />
                  <div>
                    <h4 className="font-weight-bold text-dark mb-0"><span className="scVal">0</span>%</h4>
                    <h5 className="text-dark mb-0">Процент довольных клиентов</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex py-3 my-3 my-lg-0 justify-content-center" data-aos="fade-up">
                  <img src={finishedProject} alt="satisfied-client" className="mr-3" />
                  <div>
                    <h4 className="font-weight-bold text-dark mb-0"><span className="fpVal">0</span></h4>
                    <h5 className="text-dark mb-0">Выполненно сделок</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex py-3 my-3 my-lg-0 justify-content-center" data-aos="fade-down">
                  <img src={teamMembers} alt="Team Members" className="mr-3" />
                  <div>
                    <h4 className="font-weight-bold text-dark mb-0"><span className="tMVal">0</span></h4>
                    <h5 className="text-dark mb-0">Клиенты</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex py-3 my-3 my-lg-0 justify-content-center" data-aos="fade-up">
                  <img src={ourBlogPosts} alt="Our Blog Posts" className="mr-3" />
                  <div>
                    <h4 className="font-weight-bold text-dark mb-0"><span className="bPVal">0</span></h4>
                    <h5 className="text-dark mb-0">Раритетных книг</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial" id="testimonial">
          <div className="container">
            <div className="row  mt-md-0 mt-lg-4">
              <div className="col-sm-6 text-white" data-aos="fade-up">
                <p className="font-weight-bold mb-3">Отзывы</p>
                <h3 className="font-weight-medium">
                  Самые популярные комментарии
                </h3>
                <ul className="flipster-custom-nav">
                  <li className="flipster-custom-nav-item">
                    <a href="javascript:;" className="flipster-custom-nav-link" title="0"></a>
                  </li>
                  <li className="flipster-custom-nav-item">
                    <a href="javascript:;" className="flipster-custom-nav-link" title="1"></a>
                  </li>
                  <li className="flipster-custom-nav-item">
                    <a href="javascript:;" className="flipster-custom-nav-link active" title="2"></a>
                  </li>
                  <li className="flipster-custom-nav-item">
                    <a href="javascript:;" className="flipster-custom-nav-link" title="3"></a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <div id="testimonial-flipster">
                  <ul>
                    <li>
                      <div className="testimonial-item">
                        <img src={testimonial1} alt="icon" className="testimonial-icons" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Mark Spenser</h6>
                        <p className="testimonial-destination">Accounts</p>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-item">
                        <img src={testimonial2} alt="icon" className="testimonial-icons" />
                        <p>Lorem ipsum dolor sit amet, consectetur
                          pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Tua Manuera</h6>
                        <p className="testimonial-destination">Director,Dj market</p>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-item">
                        <img src={testimonial3} alt="icon" className="testimonial-icons" />
                        <p>Lorem ipsum dolor sit amet, consectetur
                          pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Sarah Philip</h6>
                        <p className="testimonial-destination">Chief Accountant</p>
                      </div>
                    </li>
                    <li>
                      <div className="testimonial-item">
                        <img src={testimonial4} alt="icon" className="testimonial-icons" />
                        <p>Lorem ipsum dolor sit amet, consectetur
                          pretium pretium tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium
                        </p>
                        <h6 className="testimonial-author">Mark Spenser</h6>
                        <p className="testimonial-destination">Director,Dj market</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="clients pt-5 mt-5" data-aos="fade-up" data-aos-offset="-400">
          <div className="container">

            <div className="row">
              <h3 className="font-weight-medium text-dark" style={{marginBottom: '20px'}}>Источники с книгами</h3>
              <div className="col-sm-12">
                <div className="d-sm-flex justify-content-between align-items-center" style={{flexWrap: 'wrap'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={alibLogo} alt="alib" className="p-2 p-lg-0" data-aos="fade-down"
                         data-aos-offset="-400" style={{height: '75px'}}/>
                    <img src={alibText} alt="alib" className="p-2 p-lg-0" data-aos="fade-down"
                         data-aos-offset="-400" />
                  </div>
                  <img src={libex} alt="netflix" className="p-2 p-lg-0" data-aos="fade-down"
                       data-aos-offset="-400" style={{height: '75px'}}/>
                  <img src={ozon} alt="instagram" className="p-2 p-lg-0" data-aos="fade-up"
                       data-aos-offset="-400" style={{height: '75px'}} />
                  <img src={rusbuk} alt="coinbase" className="p-2 p-lg-0" data-aos="fade-down"
                       data-aos-offset="-400" style={{height: '75px'}}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contactus" id="contact">
          <div className="container">
            <div className="row mb-5 pb-5">
              <div className="col-sm-5" data-aos="fade-up" data-aos-offset="-500">
                <img src={contact} alt="contact" className="img-fluid" />
              </div>
              <div className="col-sm-7" data-aos="fade-up" data-aos-offset="-500">
                <h3 className="font-weight-medium text-dark mt-5 mt-lg-0">Есть проблемы?</h3>
                <h5 className="text-dark mb-5">Обращайтесь в нашу тех. поддержку</h5>
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" placeholder="Name*" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="email" className="form-control" id="mail" placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea name="message" id="message" className="form-control" placeholder="Message*"
                                  rows="5"></textarea>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <button
                        className="btn btn-secondary"
                      >SEND</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <address>
                  <p>АДРЕС undefined</p>
                  <p className="mb-4">streen undefined</p>
                  <div className="d-flex align-items-center">
                    <p className="mr-4 mb-0">tel: undefined</p>
                    <a href="mailto:info@yourmail.com" className="footer-link">tel: undefined</a>
                  </div>
                </address>
                <div className="social-icons">
                  <h6 className="footer-title font-weight-bold">
                    Ссылки на нас
                  </h6>
                  <div className="d-flex">
                    <a href="https://github.com/widebooks"><i className="mdi mdi-github-circle"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-4">
                    <h6 className="footer-title">О нас</h6>
                    <ul className="list-footer">
                      <li>
                        <Link className="footer-link" to="/info">Что делает наш сервис?</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <h6 className="footer-title">Тем, кто хочет с нами работать</h6>
                    <ul className="list-footer">
                      <li>
                        <Link className="footer-link" to="/info/partner">Партнёрам</Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="/info/faq">Часто задаваемые вопросы</Link>
                      </li>
                      <li>
                        <Link className="footer-link" to="/info/support">Техническая поддержа</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <h6 className="footer-title">Компания</h6>
                    <ul className="list-footer">
                      <li>
                        <Link className="footer-link" to="/info/get-job">Устройство на работу</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Link className="navbar-brand" to="/app" style={{color: '#fff'}}>Букич, © 2023</Link>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </body>
)}

Main.propTypes = {
  onSearch: PropTypes.func,
};

Main.defaultProps = {
  onSearch: () => {}
};

export default Main;