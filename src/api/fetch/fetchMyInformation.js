import { myInformationSlice } from '../../model/accounts/reducer/accountReducers';
import axios from './lib/axios'
import fetchUrl from './lib/fetchUrl'

const fetchMyInformation = (loginUser) => {
    return async dispatch => {
        await axios.get(fetchUrl.myInformation, loginUser)
            .then(response => dispatch(myInformationSlice.actions.myInformation(response.data)))
            .catch(error => {
                console.log(error);
                debugger;
            });
    }
}
export default fetchMyInformation;