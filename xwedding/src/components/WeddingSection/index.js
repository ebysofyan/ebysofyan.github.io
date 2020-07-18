import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Walimah</h2>
              <span className="sub-title sub-title__wedding">InsyaAllah akan Diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="09:00 AM WITA"
                date="Ahad, 26 Juli 2020"
                description="Lokasi: Jurit, Desa Bebuak, Kecamatan Kopang, Lombok Tengah"
                mobileDescription="Jurit, Desa Bebuak <br />Kecamatan Kopang, Lombok Tengah"
              />
              <WeddingInfoBox
                title="Walimah"
                time="10:00 - 12:00 WITA"
                date="Ahad, 26 Juli 2020"
                description="Lokasi: Jurit, Desa Bebuak, Kecamatan Kopang, Lombok Tengah"
                mobileDescription="Jurit, Desa Bebuak <br />Kecamatan Kopang, Lombok Tengah"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
