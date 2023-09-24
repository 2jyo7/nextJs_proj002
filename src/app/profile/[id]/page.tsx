export default function UserProfile({ params}: any) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen
        py-2 font-bold bg-black text-white">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page
            <span className="text-purple-800 rounded ml-2 ">{params.id}</span> 
            </p>
        </div>
    )
}