interface ImageBannerProps {
    imageUrl: string;
    imageDescription?: string;
}

export function ImageBanner({imageUrl, imageDescription ="imagem exemplo"}: ImageBannerProps){
    return (
        <div className="w-full my-10 p-5" style={{boxShadow:"0 0px 3px #aaaaaace " }}>
          <img
            tabIndex={0}
            className="w-full  h-full max-h-[20rem] object-contain rounded "
            src={imageUrl}
            alt={imageDescription } 
           aria-label={imageDescription}
          />
      </div>
    )
}