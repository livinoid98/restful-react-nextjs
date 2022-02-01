import React, {useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'

const Home = () => {
    useEffect(async () => {
        const data = await axios.get('http://localhost:8000');
        console.log(data.data);
    }, []);
    return(
        <>
            <div className="main_img"></div>
            <div className="life_style">
                <img src="/img/gray_line1.png" alt=""/>
                <img src="/img/dress_perfume_pink.png" alt=""/>
                <img src="/img/happy_memory_text.png" alt=""/>
                <img src="/img/life_style_text.png" alt=""/>
                <ul className="clearfix">
                    <Link href="/product"><a><li>DRESS PERFUME</li></a></Link>
                    <Link href="/product"><a><li>CANDLE</li></a></Link>
                    <Link href="/product"><a><li>DIFFUSE</li></a></Link>
                </ul>
                <img src="/img/dress_perfume_blue.png" alt=""/>
            </div>
            <div className="gift_wrap">
                <div className="best_gift">
                    <img src="/img/gift_img.png" alt=""/>
                    <span>BEST GIFT</span>
                    <img src="/img/purple_line.png" alt=""/>
                    <span>[데메테르] 머스크 바디세트+소이캔들 /DMC02351</span>
                    <img src="/img/powdery_musk_text.png" alt=""/>
                    <button></button>
                    <button></button>
                </div>
                <div className="powdery_musk"></div>
            </div>
            <div className="brand_story">
                <div className="back_pink"></div>
                <div className="main_pink"></div>
                <img src="/img/layering_img.png" alt=""/>
                <img src="/img/blending_text.png" alt=""/>
                <img src="/img/brand_title.png" alt=""/>
                <img src="/img/perfume_layering_text.png" alt=""/>
                <img src="/img/expand_text.png" alt=""/>
                <img src="/img/brand_story_title.png" alt=""/>
                <img src="/img/brand_story_title2.png" alt=""/>
                <img src="/img/memory_text.png" alt=""/>
                <img src="/img/history_text.png" alt=""/>
                <img src="/img/brand_img2.png" alt=""/>
            </div>
            <div className="instagram">
                <img src="/img/instagram_title.png" alt=""/>
                <img src="/img/sns_img1.png" alt=""/>
                <img src="/img/sns_img2.png" alt=""/>
                <img src="/img/sns_img3.png" alt=""/>
                <img src="/img/sns_img4.png" alt=""/>
            </div>
        </>
    );
};

export default Home;