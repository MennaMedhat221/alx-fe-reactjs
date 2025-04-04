function UserProfile () {
    return (
        <div className="user-profile sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto bg-gray-100 p-8 max-w-sm my-20 rounded-lg shadow-lg text-center hover:shadow-xl">
        <img className="rounded-full hover:scale-110 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover transition-transform duration-300 ease-in-out" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="User" />
        <h1 className="hover:text-blue-500 text-blue-800 my-4 mx-auto text-lg md:text-xl font-semibold mb-2">John Doe</h1>
        <p className="text-gray-600 text-sm md:text-base ">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    )
}
export default UserProfile