const Avatar = ({imageLink}) => {
    return (
        <div className="relative md:h-32 md:w-32 sm:h-20 sm:w-20">
            <img className="rounded-full border border-gray-100 shadow-sm" alt="band" src={imageLink}/>
        </div>
    );
}

export default Avatar;