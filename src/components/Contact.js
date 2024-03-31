import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">
                    Contact us
                </h1>
                {/* make form here in jsx*/}
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" className="mt-1 p-2 w-full border-gray-300 rounded-md"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;