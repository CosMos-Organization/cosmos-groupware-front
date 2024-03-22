import React, { useState } from 'react';
import style from '../SCSS/components/Organization.module.scss';

const TreeItem = ({ label, id, depth, type, expand, children }) => {
    const [isExpanded, setIsExpanded] = useState(expand);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const getImagePath = () => {
        if (type === 'department') {
            return '/org/folder.svg';
        } else if (type === 'employee') {
            return '/org/human.svg';
        } else {
            return ''; // 다른 유형에 대한 이미지가 필요한 경우 여기에 추가
        }
    };

    // root일때만 label 값만 출력하도록 수정
    if (type === 'root') {
        return (
            <div style={{ marginLeft: `${depth * 20}px` }}>
                {label}
                {isExpanded && children && children.map(child => (
                    <TreeItem key={child.id} {...child} />
                ))}
            </div>
        );
    }

    // employee인 경우 클릭 이벤트 처리하지 않음
    const handleClick = type === 'employee' ? null : toggleExpand;

    return (
        <div className={style.tree_item_wrapper} style={{ marginLeft: `${depth * 20}px` }}>
               <div className={style.tree_item_box} onClick={handleClick}>
                {type !== 'employee' && (isExpanded ? <img src='/org/minus.svg' /> : <img src='/org/plus.svg' />)} <img src={getImagePath()} alt={type} /> {label}
            </div>
            {isExpanded && children && children.map(child => (
                <TreeItem key={child.id} {...child} />
            ))}
        </div>
    );
};

const Organization = ({ initialTreeData }) => {
    return (
        <div className={style.org_main}>
            {initialTreeData.map(data => (
                <TreeItem key={data.id} {...data} />
            ))}
        </div>
    );
};

export default Organization;
