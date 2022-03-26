export default function Project({title,thumbnail}){
return(
<>
<div className="min-h-[16rem] mx-auto max-w-xs relative rounded-lg bg-black overflow-hidden my-4 ">
<img src={thumbnail} className="max-w-xs h-64 object-cover opacity-50 inset-x-0" alt={title} />
<div className="absolute bottom-0 text-center text-xl font-medium py-4 px-2 text-gray-50 ">{title}</div>
</div>
</>
)
}
