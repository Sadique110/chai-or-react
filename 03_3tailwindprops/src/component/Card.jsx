import React from "react"


function Card({ username, btnText = " button" }) {
    return (
        <>
        <div className="p-4 bg-white rounded-lg shadow max-w-80">
            <p className="text-gray-900 text-xl font-semibold uppercase">{username}</p>
            <p className="text-gray-500 text-sm">12 Tracks</p>
            <p className="text-gray-900 font-semibold text-sm mb-3">Frontend Radio</p>
            <img className="rounded-md" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=700&auto=format&fit=crop" alt="Frontend Radio"/>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                {btnText}
            </button>
        </div>
        </>
    );
}

export default Card;