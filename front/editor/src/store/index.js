import { createStore } from 'redux';


const initialState = [
    {
      type: "paragraph",
      children: [{ text: "You can start writing!" }],
    },
  ];

const documentReducer = (state = { document: initialState }, action) => {
    if(action.type === 'update'){
        return{
            document: state.document,
        };
    }

    return state;
};

const store = createStore(documentReducer);

export default store;





























