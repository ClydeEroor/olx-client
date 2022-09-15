import React from 'react';
import {Link} from "react-router-dom";

const PopularPosts = ({post}) => {
    //{post}
    return (
        <div className="bg-gray-600 my-1">
            <Link to={`${post._id}`} className="flex text-xs text-gray-300 hover:bg-gray-800 hover:text-white">>
                {post.title}
                Популярный пост
            </Link>
        </div>
    );
};

export default PopularPosts;
