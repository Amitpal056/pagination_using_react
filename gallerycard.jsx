import React from 'react'

const Gallerycard = (props) => {
  return (
    <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
          <div className="w-40 rounded-2xl overflow-hidden h-44 ">
            <img
              className="h-full w-fit "
              src={props.elem.download_url}
              alt="image not loaded"
            />
          </div>
          <h1 className="text-white font-bold text-md">{props.elem.author}</h1>
        </a>
  )
}

export default Gallerycard
