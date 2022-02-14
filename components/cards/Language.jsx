export default function LanguageCard({ image, name }) {

    return (
        <>
            <div className={`max-w-xs hover:scale-105 transition ease-linear p-2 flex flex-col shadow-lg rounded-lg bg-gradient-to-br from-pink-600 to-rose-400`}>
                <img src={image} alt="" className="mt-4 h-12" />
                <div className={`text-center text-gray-50 my-4 font-bold`}>{name}</div>
            </div>
        </>
    )
}
