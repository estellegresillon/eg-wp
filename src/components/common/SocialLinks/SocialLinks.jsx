import React from "react";

import "./SocialLinks.scss";
import { SOCIAL_LINKS } from "utils";

const SocialLinks = () => (
  <div className="Social-Icons">
    {SOCIAL_LINKS.map((link) => (
      <a
        href={link.url}
        key={link.icon}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i aria-hidden="true" className={link.icon} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
