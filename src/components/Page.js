import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    render() {
        const { year, photos, fetching } = this.props;
        let photoImg = [];
        for(let i = 0; i < photos.length; i++) {
            photoImg.push(<li key={i}><img src={photos[i]} /></li>);
        }
        return <div className='ib page'>
            <p>
                <button className='btn' onClick={::this.onYearBtnClick}>2016</button>{' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
                <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {
                fetching ?
                    <p>Загрузка...</p>
                    :
                    <div>
                        <p>У тебя {photos.length} фото за {year} год</p>
                        <ul className='photos-img'>
                            {photoImg}
                        </ul>
                    </div>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
};