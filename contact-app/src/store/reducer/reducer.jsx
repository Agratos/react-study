const initstate = {
    contactList: [],
    searchName: '',
    favorit: false,
    idModal: false,
}

const reducer = (state = initstate, action) => {
    const { type, payload } = action;

    switch(type){
        case 'ADD_CONTACT':
            return {
                ...state, 
                contactList: [
                    ...state.contactList, 
                    { 
                        name: payload.name, 
                        phone: payload.phone,
                        email: payload.email,
                        favorit: payload.favorit,
                    }
                ]
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contactList: state.contactList.filter(({name, phone, email}) => name !== payload.name && phone !== payload.phone && email !== payload.email)
            }
        case 'CHANGE_CONTACT':
            console.log(payload)
            return {
                ...state,
                contactList: state.contactList.map(contact => 
                    contact.name === payload.name && contact.phone === payload.phone && contact.email === payload.email 
                    ? { ...contact, favorit: payload.favorit } 
                    : contact
                )
            }
        case 'SEARCH_NAME':
            return {
                ...state,
                searchName: payload.searchName
            }
        case 'FAVORIT':
            return {
                ...state,
                favorit: payload.favorit
            }
        case 'IS_MODAL':
            return {
                ...state,
                idModal: payload.idModal
            }
        default:
            return {...state}
    }
}

export default reducer;