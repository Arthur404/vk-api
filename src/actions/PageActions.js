import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS
} from '../constants/Page'

export function getPhotos(year) {

    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: ['https://orig00.deviantart.net/1c66/f/2012/236/b/e/__pc___katsune_100x100_px_by_skywinds-d5c94is.gif',
                    'http://img1.liveinternet.ru/images/attach/b/0/10189/10189692_12681838.gif',
                    'https://wf.mail.ru/forums/image.php?u=15232668&dateline=1447334114']
            })
        }, 1000)
    }

}