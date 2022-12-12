import React, {useState} from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PopularPosts from '../components/PopularPosts'
import {getAllPosts} from '../redux/features/post/postSlice'

import {BsArrowDownUp, BsCashCoin} from 'react-icons/bs';
import PostItem from "../components/PostItem";

//
// import {Canvas} from "@react-three/fiber";
// import Box from "../3dComponents/Box";
// import { Suspense } from "react";


export const MainPage = () => {
    const dispatch = useDispatch()

    const {posts, popularPosts} = useSelector((state) => state.post)
    const [openSort, setOpenSort] = useState(undefined)
    const [filterFrom, setFilterFrom] = useState(5000)
    const newArr = {openSort,filterFrom}


    useEffect(() => {
        dispatch(
            getAllPosts(newArr)
        )
    }, [dispatch, openSort])

    const HandlePostFilter = () => {
        if (openSort === undefined) {
            return setOpenSort(1)
        }
        if (openSort === 1) {
            return setOpenSort(-1)
        }
        setOpenSort(undefined)

    }
    if (!posts.length) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Постов не существует.
            </div>
        )
    }
    return (
        <div className='max-w-[900px] main_page mx-auto py-10'>
            <div className="flex flex-row mb-20">
                {/*Earth Animation*/}
                {/*<Suspense fallback={null}>*/}
                {/*    <Canvas children={""}>*/}
                {/*        <ambientLight intensity={0.1}/>*/}
                {/*        <pointLight position={[1, 10, 360]}/>*/}
                {/*        <Box position={[0,0,1]}/>*/}
                {/*    </Canvas>*/}
                {/*</Suspense>*/}
                <div className="filters flex-row w-full">
                    <div className="price_filter flex flex-row justify-between w-full">
                        <button className="w-full px-3 py-2 bg-blue-300 rounded-lg flex items-center hover:bg-fuchsia-300 max-w-[140px]" onClick={HandlePostFilter}
                                type="submit">
                            <BsCashCoin/>
                            <p className="px-3">Price</p>
                            <BsArrowDownUp/>
                        </button>
                        <div className="FiltersFromTo ">
                            <div className="flex-row flex items-center my-1 justify-end">
                                <p className="mx-2">From</p>
                                <input className="max-w-[50px] rounded-3xl" type="text"/>
                            </div>
                            <div className="flex-row flex items-center my-1 justify-end">
                                <p className="mx-2">To</p>
                                <input className="max-w-[50px] rounded-3xl" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="views_filter">

                    </div>
                </div>
            </div>

            <div className='flex justify-between gap-8'>
                <div className='flex flex-col gap-10 basis-4/5'>
                    {posts?.map((post, idx) => (<PostItem key={idx} post={post}/>))}
                </div>
                <div className='basis-1/5'>
                    <div className='text-xs uppercase text-white'>
                        Популярное:
                    </div>
                    {popularPosts?.map((post, idx) => (
                        <PopularPosts key={idx} post={post}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MainPage;