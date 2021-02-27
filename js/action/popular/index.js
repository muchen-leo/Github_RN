import Types from '../types';
import DataStore from '../../expand/dao/DataStore';

/**
 * 获取最热数据的异步action
 * @param  storeName 
 * @param  url 
 */
export function onLoadPopularData(storeName,url) {
    return dispatch => {
        dispatch({type:Types.POPULAR_REFRESH,storeName:storeName});
        let dataStore = new DataStore();
        dataStore.fetchData(url)//异步action与数据流
        .then(data=>{
            handleData(dispatch,storeName,data)
        })
        .catch(error => {
            console.log(error+'错误');
            dispatch({
                type:Types.LOAD_POPULAR_FAIL,
                storeName,
                error
            });
        })
    }
}

function handleData(dispatch, storeName, data){
    //属性为type,不是types!!!
    dispatch({
        type:Types.LOAD_POPULAR_SUCCESS,
        items:data && data.data && data.data.items,
        storeName:storeName
    })
}