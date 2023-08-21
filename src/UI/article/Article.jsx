import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

const Article = ({ to, img, title }) => {
  return (
    <Link to={to} className="article">
      <div className="article__img">
        <img src={img} alt="img" loading="lazy" />
      </div>
      <div className="article__wrapper">
        <div className="article__date">10 May, 2020</div>
        <div className="article__title">{title}</div>
      </div>
    </Link>
  );
};

export default Article;
