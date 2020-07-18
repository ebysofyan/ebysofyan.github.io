import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import FooterSection from '@components/FooterSection';
import Invitations from 'data/invitations';
// import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const invitationCode = decodeURIComponent(getQueryValue(location, 'invitation_code') || '');
  const isAnonymGuest = invitationCode === '';
  const invitedPeople = Invitations.find(v => v.id == invitationCode)

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection invitedPeople={
          invitedPeople || {
            name: "Opps sorry, you are not in list"
          }} />
        <WeddingSection />
        <LocationSection />
        <FooterSection isAnonymGuest={isAnonymGuest} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        location={location}
        invitedPeople={
          invitedPeople || {
            name: "Opps sorry, you are not in list"
          }
        }
        isAnonymGuest={isAnonymGuest}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      {/* <FloatingMusic /> */}
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
