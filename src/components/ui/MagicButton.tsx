

type propsType = {
  title: string,
  icons: React.ReactNode,
  position: string,
  handleClick?: () => void ,
  otherClasses?: string,


}

const MagicButton = ({title, icons, position, handleClick, otherClasses}:propsType) => {
  return ( 
    <div>
  <button
    className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
    onClick={handleClick}>
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

    <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icons}
      {title}
      {position === "right" && icons}
    </span>
  </button></div>
  )
}

export default MagicButton