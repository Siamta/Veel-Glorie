interface YouTubeProps {
  title: string
  url: string
}

function YouTube({ title, url }: YouTubeProps): JSX.Element {
  return (
    <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title={`${title} - [YouTube]`}
        className="
          border-none
          w-[17rem] sm:w-[26rem]  md:w-[40rem]
          h-[8rem]  sm:h-[14rem]  md:h-[23rem]
        "
        allow="accelerometer; autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
  )
}

export default YouTube