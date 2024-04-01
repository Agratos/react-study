const initstate = {
    contactList: [],
    searchName: '',
    favorit: false,
    idModal: false,
}

const reducer = (state = initstate, action) => {
    const { contactList } = state
    const { type, payload } = action;

    switch(type){
        case 'ADD_CONTACT':
            const newId = contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1;
            return {
                ...state, 
                contactList: [
                    ...contactList, 
                    { 
                        id: newId,
                        name: payload.name, 
                        phone: payload.phone,
                        email: payload.email,
                        image: payload.image,
                        favorit: payload.favorit,
                    }
                ]
            }
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contactList: contactList.filter(({id}) => id !== payload.id)
            }
        case 'CHANGE_CONTACT':
            return {
                ...state,
                contactList: contactList.map(contact => 
                    contact.id === payload.id
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