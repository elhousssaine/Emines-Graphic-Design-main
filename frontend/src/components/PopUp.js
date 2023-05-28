import { useState, useEffect } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <table
              align="center"
              border="0"
              cellspacing="0"
              cellpadding="0"
              role="presentation"
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                maxWidth: '600px',
              }}
            >
              {/*
                Paste the HTML code for the message here
                
              */<table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;border-collapse:collapse;max-width:600px;">
<tbody><tr>
<td align="center" valign="top" style="direction:ltr;"><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;border-collapse:collapse;max-width:600px;">
<tbody><tr>
<td align="center" valign="top" style="background-color:white;direction:ltr;padding:40px 40px 0 40px;"><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;border-collapse:collapse;">
<tbody><tr>
<td align="left" valign="top" width="100%" style="direction:ltr;padding:0;"><a href="https://www.instagram.com/elx.design/" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-safelink="true" data-linkindex="0"><img data-imagetype="External" src="https://i.ibb.co/BgDp6sD/Frame-40-1.png#https://i.ibb.co/BgDp6sD/Frame-40-1.png" border="0" alt="EGX" vspace="0" hspace="0" style="display:block;width:108px;max-width:138px;"> </a></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;border-collapse:collapse;max-width:600px;">
<tbody><tr>
<td align="center" valign="top" dir="ltr" style="background-color:white;padding:60px 0 0 0;"></td></tr>
<tr>
<td align="left" valign="top" style="font-size:16px;font-family:Helvetica,Arial,sans-serif;background-color:white;padding:0 40px;line-height:150%;">
<p style="margin-top:0;margin-bottom:0;">Dear SOLE Team,<br aria-hidden="true">
<br aria-hidden="true">
I hope this email finds you well. I am reaching out to inquire about the payment for the graphic and motion design services that I provided for the X-ibition campaign from the final week of February until March 9th of this year. As you may recall, I was responsible for designing the official campaign for your highly anticipated yearly event, which was a great opportunity for me to showcase my skills and contribute to the success of the campaign. <br aria-hidden="true">
<br aria-hidden="true">
I would like to kindly remind you that it has been several weeks since the X-ibition event have enrolled, and I have yet to receive payment for the services I provided. I understand that there may have been some delays in the payment process, but as the main reason for this email, I have an international internship in less than two months, and I will need the funds to help me cover parts of my expenses during my stay abroad.<br aria-hidden="true">
<br aria-hidden="true">
I would greatly appreciate it if you could provide me with an update on the status of my payment and an estimated timeframe for when I can expect to receive it. I have attached a copy of my invoice for your reference, and I am available to answer any questions or provide any additional information you may need. <br aria-hidden="true">
</p></td></tr></tbody></table><table align="center" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width:100%;border-collapse:collapse;max-width:600px;">
<tbody><tr>
<td align="left" valign="top" style="font-size:16px;font-family:Helvetica,Arial,sans-serif;background-color:white;direction:ltr;padding:0 40px 40px 40px;line-height:150%;">
<p style="margin-top:0;margin-bottom:0;"><br aria-hidden="true">
Regards,<br aria-hidden="true">
Elhoussaine CHAHBOUN</p></td></tr></tbody></table></td></tr></tbody></table>}
            </table>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        .popup-inner {
          background-color: white;
          padding: 20px;
        }
      `}</style>
    </>
  );
};