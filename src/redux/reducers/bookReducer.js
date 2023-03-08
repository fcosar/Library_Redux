import actionTypes from "../actions/actionTypes"

const initalState={
    pending:false,
    success:false,
    books:[],
    errror:false,
    errorMessage:""
}
const booksReducer=(state=initalState,action)=>{
    switch (action.type) {
        case actionTypes.booksactions.GET_BOOKS_START:
            
            return{
                ...state,
                pending:true
            }
        case actionTypes.booksactions.GET_BOOKS_SUCCESS:
           return{
                ...state,
                pending:false,
                success:true,
                error:false,
                books:action.payload
           } 
        case actionTypes.booksactions.GET_BOOKS_FAIL:
            return{
                ...state,
                pending:false,
                success:false,
                error:true,
                errorMessage:action.payload
            }       
        default:
            return state
    }
}
export default booksReducer