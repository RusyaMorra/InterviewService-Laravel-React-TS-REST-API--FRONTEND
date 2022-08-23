import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/redusers/index";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;