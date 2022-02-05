import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { setOpenItem } from "../App"


const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-top: 5px;
`;
const Section = styled.section`
    padding: 0 100px; 
`;

const MenuChapter = ({chapterName, menuItems, setOpenItem}) => {
    return (
        <Section className="menu-chapter">
           <h2>{chapterName }</h2>
            <Ul>
                {
                    menuItems.map(item =>  <MenuItem 
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        setOpenItem={setOpenItem}
                    />)
                }
            </Ul>
        </Section>
    );
}

export default MenuChapter