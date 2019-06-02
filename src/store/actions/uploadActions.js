import { storage } from '../../../firebase/firebase';
import {
  ADD_DOCUMENT_STARTED,
  ADD_DOCUMENT_COMPLETED,
  ADD_DOCUMENT_ERROR
} from '../../actionTypes/storageActionTypes';
// import { toast } from 'react-toastify';
// import constants from '../../../config/constants';

export const addDocumentStart = () => ({
  type: ADD_DOCUMENT_STARTED
});
export const addDocumentSuccess = () => ({
  type: ADD_DOCUMENT_COMPLETED
});
export const addDocumentFailure = () => ({
  type: ADD_DOCUMENT_ERROR
});

export const addDocument = (values, pathName) => {

  return (dispatch, getState, {getFirebase}) =>
    new Promise(function(resolve, reject) {
      dispatch(addDocumentStart());
    
      const image = values.document[0];
      let name;

      const firebase = getFirebase();

      const imageUpload = firebase.storage().ref(`${pathName}/${name}`).put(image);
      imageUpload.on(
        'state_changed',
        (snapshot) => {
         console.log(snapshot)
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              reject('Permission Denied');
              dispatch(addDocumentFailure('Permission Denied'));
              break;
            case 'storage/canceled':
              reject('Upload Cancelled');
              dispatch(addDocumentFailure('Upload Cancelled'));
              break;
            case 'storage/unknown':
              reject('Server Response Error');
              dispatch(addDocumentFailure('Server Response Error'));
              break;
              default: return ;
          }
        },
        () => {
            firebase.storage()
            .ref(pathName)
            .child(name)
            .getDownloadURL()
            .then((url) => {
              dispatch(addDocumentSuccess());
              resolve(url);
            });
        }
      );
    });
};