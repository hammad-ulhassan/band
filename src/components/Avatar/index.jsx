const Avatar = ({imageLink}) => {
    return (
        <div className="relative h-32 w-32">
            <img className="rounded-full border border-gray-100 shadow-sm" alt="band" src={imageLink}/>
        </div>
    );
}

export default Avatar;