import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import './app.scss'
import './layout.scss'

const Demeter = ({Component}) => {
    return(
        <>
            <Head>
                <title>Demeter</title>
            </Head>
            <div className="wrap">
                <header>
                    <div className="logo">
                        <h1><Link href="/"><a><img src="/img/logo.png" alt=""/></a></Link></h1>
                    </div>
                    <nav>
                        <ul className="clearfix">
                            <h2><Link href="/signature"><a><li>Signature</li></a></Link></h2>
                            <h2><Link href="/brand"><a><li>Brand</li></a></Link></h2>
                            <h2><Link href="/product"><a><li>Products</li></a></Link></h2>
                            <h2><Link href="/gift"><a><li>Gift/Edition</li></a></Link></h2>
                            <h2><Link href="/collaborate"><a><li>Collaborate</li></a></Link></h2>
                            <h2><Link href="/cs"><a><li>CS</li></a></Link></h2>
                        </ul>
                    </nav>
                </header>
                <div className="main">
                    <Component/>
                </div>
                <footer>
                    <Link href="/"><a><img src="/img/footer_logo.png" alt=""/></a></Link>
                    <img src="/img/footer_text.png" alt=""/>
                </footer>
            </div>
        </>
    );
};

export default Demeter;