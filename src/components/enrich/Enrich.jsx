import React, {useRef} from 'react'
import styles from './enrich.module.css';
import {Facebook, Insta, Intranet, Moodle, ReadAi, Talk, Turnitin, Twitter, Upload, Youtube} from '@/assets/svg';
import Image from 'next/image';
import {NFTStorage} from 'nft.storage'

const Enrich = () => {
    return (
        <div style={{margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div className={`${styles.enrichItem}`}>
                <h3 className={`${styles.itemHead}`}>Import Assignment and Feedback Data</h3>
                <div style={{display: 'flex', gap: '15px'}}>
                    {syncArray1.map((item, index) => (
                        <SyncItem image={item.image} text={item.text} key={index} width={`${100 / syncArray1.length}%`}/>
                    ))}
                </div>
                <div style={{display: 'flex', gap: '15px'}}>
                    {uploadArray.map((item, index) => (
                        <UploadItem text={item.text} key={index} width={`${100 / uploadArray.length}%`}/>
                    ))}
                </div>
            </div>

            <div className={`${styles.enrichItem}`}>
                <h3 className={`${styles.itemHead}`}>Import Lecture Data</h3>
                <div style={{display: 'flex', gap: '15px'}}>
                    {syncArray2.map((item, index) => (
                        <SyncItem image={item.image} text={item.text} key={index} width={`${100 / syncArray2.length}%`}/>
                    ))}
                </div>
            </div>

            <div className={`${styles.enrichItem}`}>
                <h3 className={`${styles.itemHead}`}>Import Social Feed Data</h3>
                <div style={{display: 'flex', gap: '15px'}}>
                    {syncArray3.map((item, index) => (
                        <SyncItem image={item.image} text={item.text} key={index} width={`${100 / syncArray3.length}%`}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Enrich;

const SyncItem = ({image, text, width}) => {
    return (
        <div className={`${styles.syncItem}`} style={{width: width ? width : 'auto'}}>
            <Image src={image} alt="logo"/>
            <p style={{fontSize: '14px', color: "#757575", fontWeight: 500}}>{text}</p>
        </div>
    )
}

const UploadItem = ({text, width}) => {
    const inputRef = useRef(null);

    const handleFileChange = async (e) => {
        const token = process.env.REACT_APP_NFT_STORAGE;
        const file = e.target.files[0];
        if (file) {
            const nftstorage = new NFTStorage({token: token})
            const cid = await nftstorage.storeBlob(file);
        }
    };

    return (
        <div className={`${styles.uploadItem}`} style={{width: width ? width : 'auto'}} onClick={() => inputRef.current.click()}>
            <input type='file' style={{display: 'none'}} ref={inputRef} onChange={handleFileChange}/>
            <Image src={Upload} alt="upload icon"/>
            <p style={{fontSize: '14px', color: "#000", fontWeight: 600}}>{text}</p>
            <p style={{fontSize: '12px', color: "#757575", fontWeight: 500}}>max = 5mb</p>
        </div>
    );
}

const syncArray1 = [
    {image: Moodle, text: 'Sync with Moodle'},
    {image: Turnitin, text: 'Sync with Moodle'},
    {image: Intranet, text: 'Sync with Moodle'}
]
const syncArray2 = [
    {image: Intranet, text: 'Sync with Moodle'},
    {image: ReadAi, text: 'Sync with Moodle'},
    {image: Talk, text: 'Sync with Moodle'}
]
const syncArray3 = [
    {image: Facebook, text: 'Sync with Moodle'},
    {image: Twitter, text: 'Sync with Moodle'},
    {image: Insta, text: 'Sync with Moodle'},
    {image: Youtube, text: 'Sync with Moodle'}
]
const uploadArray = [
    {text: 'Upload File'},
    {text: 'Share Folder'}
]



