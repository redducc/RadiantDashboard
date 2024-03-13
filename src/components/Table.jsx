import { WhiteCheck } from '@/assets/svg';
import Image from 'next/image';
import React, { useState } from 'react'

const Table = ({ select, getSelected }) => {

    return (
        <div style={{ width: '100%', border: '1px solid #E0E0E0', borderRadius: '15px', margin: '20px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '50px', padding: '10px', borderBottom: '1px solid #E0E0E0' }}>
                {tableHead.map((item, index) => (
                    <p key={index} style={{ color: '#A1A1AA', fontWeight: '500', width: `${100 / tableHead.length}%`, textAlign: 'center' }}>{item}</p>
                ))}
            </div>
            <div style={{ marginTop: '10px', padding: '10px' }}>
                {tableContent.map((item, index) => (
                    <div key={index} style={{ height: '45px', userSelect: 'none' }}>
                        <div style={{ cursor: 'pointer', height: 'fit-content', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            onClick={() => select(index)}
                        >
                            <div style={{ width: `${100 / item.length}%`, display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'flex-start' }}>
                                <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: getSelected.includes(index) ? 'none' : '1px solid #E0E0E0', backgroundColor: getSelected.includes(index) ? '#18077F' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {getSelected.includes(index) && <Image src={WhiteCheck} style={{ width: '9px' }} />}
                                </div>
                                <p style={{ fontWeight: 600, fontSize: '15px' }}>{item.slice(0, 1)}</p>
                            </div>
                            {item.slice(1).map((subItem, subIndex) => (
                                <p key={subIndex} style={{ width: `${100 / item.length}%`, textAlign: 'center', fontSize: '14px', color: '#757575', fontWeight: '500' }}>{subItem}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table;


const tableHead = [
    "Member Name",
    "Member Type",
    "Set",
    "Sub Set 1",
    "Sub Set 2"
]

const tableContent = [
    ["Kshitiz chutiya", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Priyanshu gandu", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Rohit lodu", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Sushmit Randi", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Anthony Grayling", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Reza N.Musavi", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["James Osomo", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Nik amini", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Kyle merdic", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
    ["Nila alinmia", "Student", "Philosophy", "Applied Ethics", "Applied Ethics"],
]
