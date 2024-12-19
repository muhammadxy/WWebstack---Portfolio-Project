import { AuthForm } from "./_components/auth-form";

const Page = () => {
    return (
        <div className="bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
        <h1 className="text-3xl font-bold text-gray-700">
        Welcome to our ChatApp! This platform is the result of teamwork and collaboration. We hope you enjoy connecting and communicating seamlessly. 😊!
        </h1>
        
        <div className="relative overflow-hidden rounded-3xl">
            <AuthForm />
        </div>
        <footer className="bg-gray-800 text-gray-200 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} ChatApp. Built with ❤️ by a collaborative team.
      </p>
    </footer>
        </div>
    );
};

export default Page;
