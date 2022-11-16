import {createSlice} from '@reduxjs/toolkit';
import { addDataToLocalStorage, getDatafromLocalStorage, removeDatafromLocalStorage } from '../utils/localStorage';


const initialState = {
    id:'',
    name:'',
    dateOfBirth:'',
    gender:'',
    genderList:['Male','Female'],
    role:'',
    roleList:['Frontent Developer','Backend Developer', 'DevOps', 'Data Engineer'],
    skill:'',
    skillList:['Reactjs','Angular','.Net','Java','NodeJs','AWS','Azure'],
    otherSkills:'',
    address:'',
    comments:'',
    isSubmit:false,
    isEdit:false,
    tableData: getDatafromLocalStorage()

};


const formValidationSlice = createSlice({
    name:"formValidationSlice",
    initialState,
    reducers:{
        handleChange: (state,{payload:{name,value}}) => {
            state[name] = value;
        },
        submit:state => {
            state.isSubmit = true;
        },
        clearValues:state => {
            return {
                ...state,name:"",dateOfBirth:"",comments:"",skill:"",otherSkills:"",address:"",role:"",gender:""
            }
        },
        submitData: (state,{payload}) => {
            addDataToLocalStorage(payload, state.tableData)

        },
        setEditTable:(state,{payload:{id}}) => {
            const result = state.tableData.find(item =>item.id === id)
            return {...state,isEdit:true, ...result}
        },
        editTabaleData:(state,{payload}) => {
            addDataToLocalStorage(payload, state.tableData)
        },
        removeTable:(state,{payload}) => {
            removeDatafromLocalStorage(payload, state.tableData)

        }
        
    }
});


export const {handleChange,submit, submitData, setEditTable,editTabaleData,clearValues, removeTable} = formValidationSlice.actions
export default formValidationSlice.reducer