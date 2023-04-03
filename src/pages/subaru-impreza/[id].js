import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getEntry} from "../../utils/index";

const styles = {

}

export default function Page(props) {

    const { data } = props;

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <Head>
                <title>Subaru Impreza</title>
                <meta name="description" content="Page de Présentation de la Subaru Impreza"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.titleContainer}>
                    <Image src={"/garage.png"} alt={"Garage"} width={50} height={50}/>
                    <h1 className={styles.title}>{data.fields.modelTitle}</h1>
                </div>
                <div className={styles.content}>
                </div>
            </main>
        </>
    )
}



// Path: src/pages/subaru-impreza/[id].js

export async function getServerSideProps(context) {

    const { id } = context.params;

    const data = await getEntry(id);

    return {
        props: {
            data// our beautiful Contentful content
        }
    }
}