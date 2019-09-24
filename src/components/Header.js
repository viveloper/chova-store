import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {  
  render() {
    return (
      <header>
        <nav className="top_nav">
          <div className="top_nav_cont">
            <ul>
              <li>
                <Link to="/guide/main">구매가이드</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/qna/write">Q&amp;A</Link>
              </li>
              <li>
                <Link to="/event">이벤트</Link>
              </li>
              <li className="last">
                <Link to="/point/town">N Point Town</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/signin">로그인</Link>
              </li>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li className="last">
                <Link to="/guest">비회원</Link>
              </li>             
            </ul>
          </div>
        </nav>
        <div className="top_head">
          <div className="eshop_logo">
            <Link to="/">
              <img src="/img/inc/eshop_logo.gif" alt="eshop_logo" />
            </Link>
          </div>
          <div className="search">
            <span><img src="/img/inc/btn_sch.gif" alt="btn_sch" /></span>
          </div>
          <div className="nikon_logo">
            <Link to="/">
              <img src="/img/inc/mobile_nikon_logo_new.gif" alt="Nikon" width="71px" height="68px" />
            </Link>
          </div>
        </div>
        <nav className="nav">
          <div className="nav_cont">
            <ul>
              <li>
                <Link to="/dslr">SLR 카메라</Link>
              </li>
              <li>
                <Link to="/mirrorless">미러리스 카메라</Link>
              </li>
              <li>
                <Link to="/compact">콤팩트 카메라</Link>
              </li>
              <li>
                <Link to="/lens">렌즈</Link>
              </li>
              <li>
                <Link to="/speedlight">스피드라이트</Link>
              </li>
              <li>
                <Link to="/binoculars">쌍안경 / 거리측정기</Link>
              </li>
              <li>
                <Link to="/accessories">액세서리</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}