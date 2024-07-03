import { Fragment } from 'react';
import '../../../style/resume/GeneralInformationSection.css';

function GeneralInformationSection({ name, email, phoneNumber, website }) {
  const mailTo = 'mailto:' + email;
  if (website) {
    website = website.replace('www.', '').replace('https://', '');
    if (website.endsWith('/')) {
      website = website.substring(0, website.length - 1);
    }
  }

  const subheadings = [];
  if (phoneNumber) {
    subheadings.push(<>{phoneNumber}</>);
  }
  if (email) {
    subheadings.push(<a href={mailTo}>{email}</a>);
  }
  if (website) {
    subheadings.push(
      <a href={'https://' + website} target="_blank">
        {website}
      </a>,
    );
  }

  return (
    <>
      <h2 className="general-information-section__name">{name}</h2>
      <div className="general-information-section__contact">
        {subheadings.map((value, idx) => (
          <Fragment key={`${value}${idx}`}>
            {value}
            {idx < subheadings.length - 1 && ' | '}
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default GeneralInformationSection;
