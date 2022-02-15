export default function Project({title,thumbnail}){
return(
<>
<div className="min-h-[16rem] mx-auto max-w-xs relative rounded-lg bg-black overflow-hidden my-4 ">
<<<<<<< HEAD
<img src={thumbnail} className="max-w-xs h-64 object-cover opacity-50 inset-x-0" alt="" />
<div className="absolute max-w-xs bottom-0 text-xl font-medium py-4 px-2 transition-all ease-in duration-150 hover:-translate-y-2 text-gray-50 ">{title}</div>
=======
<img src={thumbnail} className="max-w-xs h-64 object-cover opacity-50 inset-x-0" alt={title} />
<div className="absolute bottom-0 text-xl font-medium py-4 px-2 transition-all ease-in duration-150 hover:-translate-y-2 text-gray-50 ">{title}</div>
>>>>>>> 70e31a0 (fixed some minor issues and optimised images)
</div>
</>
)
}
