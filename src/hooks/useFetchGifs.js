import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import getGifs from '../helpers/getGifs';

const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading:true
    });

    useEffect(() => {
        getGifs(category)
        .then( imgs => {
             setState({
                data: imgs,
                loading:false 
            })
        })
    }, [category])
    return state;
}

useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired,
}

export default useFetchGifs;