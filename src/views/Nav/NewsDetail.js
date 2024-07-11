import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams();

    // Giả sử bạn có một danh sách tin tức chi tiết
    const newsDetails = {
        '1': { fullName: 'Robin Wieruch', content: 'Content of Robin Wieruch' },
        '2': { fullName: 'Sarah Finnley', content: 'Content of Sarah Finnley' },
    };

    const newsItem = newsDetails[id];

    if (!newsItem) {
        return <div>News not found!</div>;
    }

    return (
        <div>
            <h2>{newsItem.fullName}</h2>
            <p>{newsItem.content}</p>
        </div>
    );
}

export default NewsDetail;
