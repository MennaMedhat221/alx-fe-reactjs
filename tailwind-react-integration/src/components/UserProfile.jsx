function UserProfile () {
    return (
        <div className="user-profile container bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-centerr">
        <img className="rounded-full w-36 h-36"src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="User" />
        <h1 className="text-xl text-blue-800 my-4 mx-auto">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    )
}
export default UserProfile