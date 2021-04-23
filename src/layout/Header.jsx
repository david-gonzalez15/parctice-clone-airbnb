import { Search } from "@material-ui/icons";
import React from "react";
//dependencies
import styled from "styled-components";

//assets
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core/";

//styled components
const HeaderMain = styled.header`
  background: #fff;
  /* box-shadow: 2px 3px 10px #ccc; */
`;
const Navigation = styled.div`
  width: 100%;
  min-height: 80px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;
const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderCenter = styled(HeaderItem)`
  border: 1px solid lightgray;
  border-radius: 999px;
  padding: 10px;
  height: 25thtgmjygjpx;
  & > input {
    border: none;
    width: 250px;
    padding: 10px;
    outline: none;
  }
`;
const HeaderRight = styled(HeaderItem)`
  justify-content: space-between;
  width: 15vw;
`;
const LogoImg = styled.img`
  object-fit: contain;
  width: 100px;
`;

const Header = () => {
  return (
    <HeaderMain>
      <Navigation>
        <HeaderItem>
          <LogoImg
            src="https://images.squarespace-cdn.com/content/v1/503bd485e4b0411ce5b1b9f3/1405971733067-EBZA82BAJ8Z9F2GR01R2/ke17ZwdGBToddI8pDm48kE3zglArHiMGY5P6DfHuO2EUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2di3bO5tWeH0OmHn7hORz0SYtbiXgyMyHFfrml8bKe9rTCjLISwBs8eEdxAxTptZAUg/image-asset.png"
            alt="Logo airbnb clone"
          />
        </HeaderItem>
        <HeaderCenter>
          <input type="text" />
          <SearchIcon />
        </HeaderCenter>
        <HeaderRight>
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMore />
          <Avatar />
        </HeaderRight>
      </Navigation>
    </HeaderMain>
  );
};
export default Header;
