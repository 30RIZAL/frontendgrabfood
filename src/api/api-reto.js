import axios from 'axios';
import config from '../config/config';

const list = async () => {
    try {
        const response = await axios.get(`${config.domain}/shop/`)
        return  response;
    } catch (err) {
        return await err.message
    }
}

const createRow = async(data)=>{
    
    try {
        const result = await axios.post(`${config.domain}/shop/`,data);
        return result;    
    } catch (error) {
        return error;
    }
}

const findRow = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/shop/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

const updateRow = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/shop/${data.reme_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}


const deleteRow = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/shop/${id}`);
        return  result;
    } catch (error) {
        return error;
        
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list,
    createRow,
    findRow,
    updateRow,
    deleteRow
}