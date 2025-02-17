import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-screen text-white flex justify-center items-center">
        <div className="bg-black flex md:flex-row flex-col justify-center items-center">
          <div className="p-[20px]">
            <Image
              src="/images/404-error.jpg"
              alt=""
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="p-[20px]">
            <h3 className="text-4xl font-black">Oops! Page Not Found</h3>
            <p className="text-lg">Navigate to Home page</p>
            <button>
              <Link href="/" className="secondary-button text-lg">
                Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
