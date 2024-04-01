import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
    const {contactList, searchName } = useSelector(state => state);

    return (
        <Wrapper>
            <ContactListWrapper>
                {contactList.filter(({name}) => name.includes(searchName)).map((item, index) => (
                    <ContactItem key={index} {...item} />
                ))}
            </ContactListWrapper>
        </Wrapper>
    )
}
const Wrapper = styled.div``;
const ContactListWrapper = styled.div``;

export default ContactList