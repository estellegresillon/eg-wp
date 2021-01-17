import React from "react";

import { PAGES } from "utils";

const MenuList = ({ onClick }) => (
  <>
    {PAGES.map((page) => (
      <a
        onClick={onClick}
        key={page.name}
        href={page.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {page.name}
      </a>
    ))}
  </>
);

export default MenuList;
