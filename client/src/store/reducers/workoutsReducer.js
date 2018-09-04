import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    userId: null,
    loading: false
};

const getUserId = ( state, action ) => {
    return updateObject( state, { userId: id, loading: true } );
};
