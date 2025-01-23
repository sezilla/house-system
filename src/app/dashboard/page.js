import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <h1 className="text-2xl">Dashboard</h1>
            </header>
            <main className="flex-grow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                        <p className="text-gray-700">Content for card 1.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                        <p className="text-gray-700">Content for card 2.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                        <p className="text-gray-700">Content for card 3.</p>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2023 Your Company</p>
            </footer>
        </div>
    );
};

export default Dashboard;