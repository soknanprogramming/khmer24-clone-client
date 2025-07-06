type GalleryItemProps = {
    imageURL : string,
    tittle : string,
    url : string
}

const GalleryItem: React.FC<GalleryItemProps> = ({imageURL, tittle, url}) => {
    return(
        <a href={url}>
            <div className='w-48 h-40 p-5 bg-blue-100 flex flex-col justify-center items-center text-center'>
                <div id="image-show" className="bg-red-400 size-20 rounded-full">
                    <img src={imageURL} className="size-20" alt="" />
                </div>
                <p>{tittle}</p>
            </div>
        </a>
    )
}

export default GalleryItem;