import React from 'react';
import {AiFillEye, AiOutlineMessage} from "react-icons/ai";
import Moment from "react-moment";
import {Link} from "react-router-dom";

export const PostItem = ({post}) => {
    if (!post) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Постов не существует.
            </div>
        )
    }

    return (
            <Link to={`/${post._id}`}>
                <div className='flex flex-col basis-1/4 flex-grow'>
                    <div className={
                        post.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'
                    }>
                        {post.imgUrl && (
                            <img src={post.imgUrl}
                                 alt="img"
                                 className='object-scale-down w-full'/>
                        )}
                    </div>
                    <div className="">
                        <div className='flex justify-between items-center pt-2'>
                            <div className='text-xs text-white opacity-50'>
                                {post.username}
                            </div>
                            <div className='text-xs text-white opacity-50'>
                                <Moment date={post.createdAt} format='D MMM YYYY HH:mm'/>
                            </div>
                        </div>
                        <div className="text-white text-xl">{post.title}</div>
                        <p className="text-xl text-violet-300 ">Address:{post.addres}</p>
                        <p className='text-white opacity-60 text-xs pt-4 line-clamp-4'>{post.text}</p>
                        <p className="text-xl text-teal-500 ">Price: ₴{post.price}</p>
                        <div className='flex gap-3 items-center mt-2'>
                            <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                                <AiFillEye/> <span>{post.views}</span>
                            </button>
                            <button className='flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                                <AiOutlineMessage/>{' '}
                                <span>{post.comments?.length || 0}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
    )

}

export default PostItem;
