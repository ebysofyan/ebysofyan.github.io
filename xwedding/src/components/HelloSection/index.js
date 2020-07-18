import React, { Fragment } from 'react';
import { string, object } from 'prop-types';

import Bride from '@assets/images/cewek-removebg-preview.png';
import Groom from '@assets/images/cowok-removebg-preview.png';

import { styWrapper } from './styles';

function HelloSection({ invitedPeople }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Warahmatullahi Wabarakaatuh</h2>
              <h3 className="sub-title hs">26 Juli 2020, Di Rumah Kami, Kopang, Lombok Tengah</h3>
              <p className="info">
                Dengan memohon Rahmat Allah Azza Wa Jalla, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan keberkahan dan
                kelancaran.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" style={{ filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.5))" }} />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Eby Sofyan Fadly</h3>
                <p className="parent-name parent-name__top">
                  Putra Bapak Fadli Hendry <br />& Ibu Maemanah
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love" style={{ color: "#5dbae8" }}>
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" style={{ filter: "drop-shadow(0 6px 6px rgba(0, 0, 0, 0.5))" }} />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Ulfana Nurmala Sari Devi</h3>
                <p className="parent-name">
                  Putri Bapak Rabi'ul <br />& Ibu Hj. Fatmawati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  invitedPeople: object.isRequired,
};

export default HelloSection;
