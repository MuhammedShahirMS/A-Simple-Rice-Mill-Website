import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import WhatsAppChatButton from "components/misc/WhatsappChat";

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

import HomePage from "pages/HomePage.js";
import Products from "pages/Products";


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "pages/ContactUs";
import AboutUs from "pages/AboutUs";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/lander" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <WhatsAppChatButton/>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default HomePage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
