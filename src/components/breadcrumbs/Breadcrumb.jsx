import React from 'react'
import styles from './breadcrumb.module.css';
import { WhiteCheck } from '@/assets/svg';
import Image from 'next/image';

const Breadcrumb = ({ list, active = 2 }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', borderBottom: '1px solid #E0E0E0', paddingBottom: '30px' }}>
            {list.map((item, index) => (
                <BreadItem key={index} title={item} index={index} totalItems={list.length} active={active} />
            ))}
        </div>
    )
}
export default Breadcrumb

const BreadItem = ({ title, index, totalItems, active, check }) => {


    return (
        <span style={{ display: 'flex', alignItems: 'flex-start', width: (index === totalItems - 1) ? "60px" : `${85 / (totalItems - 1)}%` }}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', padding: '0 10px', width: '60px', overflow: 'visible' }}>
                <span
                    className={`${styles.breadNum} ${index + 1 <= active ? styles.activeBreadNum : styles.inactiveBreadNum}`}>
                    {index + 2 <= active ?
                        <Image src={WhiteCheck} />
                        :
                        <>
                            {index + 1}
                        </>
                    }
                </span>
                <p style={{ color: index + 1 <= active ? '#000' : '#A1A1AA', fontSize: '16px', fontWeight: '600', width: '120px', maxWidth: '140px', textAlign: 'center' }}>{title}</p>
            </span>
            {!(index === totalItems - 1) && <span style={{ width: '100%', marginTop: '20px', border: '1px solid #E0E0E0' }}></span>}
        </span>
    )
}