import React from 'react';
import "./Sidebar.css";


interface SideBarProps {
    header: string;
    items: Array<object>;
    renderItem: any;
    onItemClick: any;
    isItemActive: any;
}


const Sidebar = ({
    header,
    items,
    renderItem,
    onItemClick,
    isItemActive
}: SideBarProps) => {

    return (
        <section className="Sidebar">
            <header>{header}</header>
            <ul>
                {items.map(item => {
                    return (
                        <li
                            onClick={() => {
                                onItemClick(item);
                            }}
                        >
                            {renderItem({
                                data: item,
                                isActive: isItemActive(item)
                            })}
                        </li>
                    );
                })}
            </ul>
        </section>
    );

};

export default Sidebar;