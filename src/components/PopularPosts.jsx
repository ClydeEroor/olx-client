import React from 'react';

const PopularPosts = ({post}) => {
    //{post}
    return (
        <div className="bg-gray-600 my-1">
            <div className="flex text-xs text-gray-300 hover:bg-gray-800 hover:text-white">
                {post.title}
                Популярный пост
            </div>
        </div>
    );
};

export default PopularPosts;
