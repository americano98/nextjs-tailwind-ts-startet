import Link from 'components/shared/link';

const Home = () => (
  <div className="mx-auto my-5 flex w-[600px] flex-col items-center justify-center gap-20 rounded-xl bg-[black] p-8">
    <h1 className="text-center text-6xl font-bold text-[white]">
      Pixel Point Next.js Typescript Tailwind Starter
    </h1>
    <Link to="about" className="text-2xl text-[white]">
      About
    </Link>
  </div>
);

export default Home;
