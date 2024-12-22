

export default function Button({value,  onClick} : {value: string | number,  onClick: () => void}) {
  return (
    <button className=" grid border border-lg cursor-pointer hover:bg-orange-200/30  w-20 h-20  place-content-center place-items-center  font-mono   rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0  right-2  z-50    bg-zinc-900 disabled:bg-zinc-800 transition duration-200 text-4xl  " onClick={onClick}> 
      {value}
    </button>
  )
}
