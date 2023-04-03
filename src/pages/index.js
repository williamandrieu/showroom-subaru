import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import {getEntry, getImage, getPresentations, imageUrlBuilder} from "@/utils";
import {useEffect, useState} from "react";



export default function Home() {

    const [presentations, setPresentations] = useState([]);

    useEffect( () => {
        getPresentations().then((presentations) => {
            setPresentations(presentations);
        });
    }, [])

    useEffect( () => {
        console.log(presentations);
        console.log("URL",imageUrlBuilder(presentations[0]?.fields?.thumbnail?.fields?.file.url));
    }, [presentations])

    return (
        <>
            <Head>
                <title>Showroom</title>
                <meta name="description" content="Page de Présentation des Subaru"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.titleContainer}>
                    <Image src={"/garage.png"} alt={"Garage"} width={50} height={50} />
                    <h1 className={styles.title}>SHOWROOM</h1>
                </div>
                <div className={styles.content}>
                    <p className={styles.description}>
                        Page de Présentation des Subaru
                    </p>
                    <div className={styles.grid}>
                        {
                            presentations.map((presentation, index) => {
                                return (
                                    <Card key={index} data={presentation} />
                                )
                            })
                        }
                        {/*   <a href="/subaru-impreza" className={styles.card}>
                    </a>
                    <a href="/subaru-impreza" className={styles.card}>
                    </a>
                    <a href="/subaru-impreza" className={styles.card}>
                    </a>
                    <a href="/subaru-impreza" className={styles.card}>
                    </a>*/}
                    </div>
                </div>

            </main>
        </>
    )
}

const Card = ({data}) => {
    console.log("DATA", data);

    const url = `/subaru-impreza/${data?.sys.id}`

  return(  <a href={url} className={styles.card}>
        <div className={styles.cardThumbnail}>
                <Image
                    src={imageUrlBuilder(data?.fields?.thumbnail?.fields?.file.url)}
                    alt={"Subaru Impreza"}
                    fill={true}
                >
                </Image>
        </div>
      <div className={styles.cardDescription}>
        <span className={styles.cardTitle}>{data?.fields?.modelTitle}</span>
          <p>
              {data?.fields?.description}
          </p>
      </div>
    </a>)
}
