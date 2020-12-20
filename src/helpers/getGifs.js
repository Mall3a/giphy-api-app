

import React from 'react'
import PropTypes from 'prop-types'

const getGifs = async ( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ebpasRPN20tLcwfHaDZrK8o8UCaEje83`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}


getGifs.propTypes = {
    category: PropTypes.string.isRequired
}

export default getGifs;
