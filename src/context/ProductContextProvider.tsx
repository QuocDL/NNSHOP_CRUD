import { createContext, useReducer  } from "react";
import { IProduct } from "../interfaces/IProduct";
import { produce } from "immer";

const initialState = {
    value: [],
    proID: {} as IProduct 
} as State

type State = {
    value: IProduct[]
    proID: IProduct
}

type ActionType = 
|{type: "SET_PRODUCTS", payload: IProduct[]}
|{type: "GET_PROID", payload: IProduct}
|{type: "ADD_PRODUCT", payload: IProduct}
|{type: "EDIT_PRODUCT", payload: IProduct}
|{type: "DELETE_PRODUCT", payload: number}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductContext = createContext({} as any);
const formatVnd = new Intl.NumberFormat('vi-VN',{
    style: 'currency',
    currency: 'VND'
})



const reducer = (state: State, action: ActionType) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            state.value = action.payload
            break;
        case "ADD_PRODUCT":
            state.value.push(action.payload)
            break;
        case "GET_PROID":
            state.proID = action.payload
            break;
        case "DELETE_PRODUCT":
            state.value = state.value.filter((item) => item.id !== action.payload);
            break;
        case "EDIT_PRODUCT":
           state.value =  state.value.map((item)=> item.id == action.payload.id ? action.payload : item)
            break;
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, dispatch] = useReducer(produce(reducer), initialState);

    return (
        <div>
            <ProductContext.Provider value={{ products, dispatch, formatVnd }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;