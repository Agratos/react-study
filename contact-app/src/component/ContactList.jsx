import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
    const {contactList, searchName, favorit } = useSelector(state => state);

    return (
        <Wrapper>
            <ContactListWrapper>
                {contactList.filter(({name, favorit: contactFavoit}) => name.includes(searchName) && favorit ? contactFavoit : true).map((item, index) => (
                    <ContactItem key={index} {...item} />
                ))}
            </ContactListWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: azure;
    height: 100%;
`;
const ContactListWrapper = styled.div``;

export default ContactList