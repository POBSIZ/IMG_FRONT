import React, { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import window from 'global/window';

const GoogleAnalyticsHOC = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.dataLayer = window.dataLayer || [];

      function gtag(...args: any) {
        window.dataLayer.push(args);
      }

      gtag('js', new Date());
      gtag('config', 'G-KZRZ73DV33', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  }, []);

  return (
    <>
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KZRZ73DV33"
        />
      </Head>
      {children}
    </>
  );
};
export default GoogleAnalyticsHOC;
