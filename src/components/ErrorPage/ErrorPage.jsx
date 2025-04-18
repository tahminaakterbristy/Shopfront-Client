import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <Helmet>
                <title>Shopfront | Error</title>
            </Helmet>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                    alt="Error"
                    className="w-24 h-24 mx-auto mb-4"
                />
                <h2 className="text-3xl font-bold text-red-600 mb-2">Oops! Something Went Wrong</h2>
                <p className="text-gray-600 mb-6">
                    We couldn't find the page you're looking for or an unexpected error occurred.
                </p>
                <a
                    href="/"
                    className="inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
