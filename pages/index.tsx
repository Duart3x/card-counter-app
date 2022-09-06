import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import GameTableImg from '../public/table_v2.png';
import AceSpades from '../public/cards/spades_ace.svg';
import AceHearts from '../public/cards/hearts_ace.svg';

function Home() {
    return (
        <div className="flex flex-col w-full items-center pt-12">
            <h1 className="text-3xl font-bold">Centro</h1>
            <div className="w-screen relative">
                {/*Mesa*/}
                <div className=" w-full px-52">
                    <Image
                        src={GameTableImg}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        className=" absolute z-0 pointer-events-none "
                    />
                </div>

                {/*Carta*/}
				<span className="z-[2] absolute left-[calc(50%-2.5rem)] w-20 h-32 top-28">
					<Image
						src={AceSpades}
						layout="fill"
						objectFit="scale-down"
						objectPosition="center"
						className="pointer-events-none  w-full h-full"
					/>
				</span>

                {/* <span className="absolute z-[2] left-[calc(50%-1rem)] top-28 w-20">
                    <Image
                        src={AceHearts}
                        layout="intrinsic"
                        objectFit="contain"
                        objectPosition="center"
                        className="pointer-events-none w-full"
                    />
                </span> */}
            </div>
        </div>
    );
}

export default Home;
