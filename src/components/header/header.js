import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 15px;
        font-size: 18px;
        border: 1px solid white;
        padding: 3px 5px;
        border-radius: 12%;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
              <Link to='/'>
                  Game of Thrones
              </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                  <Link to='/characters/'>
                    Char
                  </Link>
                </li>
                <li>
                  <Link to='/houses/'>
                    Houses
                  </Link>
                </li>
                <li>
                  <Link to='/books/'>
                    Books
                  </Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;