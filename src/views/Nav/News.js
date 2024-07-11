import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const News = ({news}) => {
  const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/news/${id}`);
    };
  return (
    <div>
            <h2>News</h2>
            <ul>
                {news.map(item => (
                    <li key={item.id}>
                        <Link to={`/news/${item.id}`}>
                            {item.fullName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
  );
};

export default News;
