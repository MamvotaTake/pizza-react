<<<<<<< HEAD
function Home() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export default Home;
=======
import CreateUser from "../features/user/CreateUser"

function Home () {
  return (
    <div className="my-10 sm:my-16 text-center">
      <h1 className='text-xl font-semibold text-center mb-8 md:text-3xl'>
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>
      <CreateUser/>
    </div>

  )
}

export default Home
>>>>>>> 0c6fdad (React Router, and Tailwindcss)
