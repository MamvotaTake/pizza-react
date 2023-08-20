<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
=======
import { useNavigate, useRouteError } from 'react-router-dom'
import LinkButton from './LinkButton'

function Error () {
  const error = useRouteError()
  console.log(error)
>>>>>>> 0c6fdad (React Router, and Tailwindcss)

  return (
    <div>
      <h1>Something went wrong 😢</h1>
<<<<<<< HEAD
      <p>%MESSAGE%</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
=======
      <p>
        {error.data || error.message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  )
}

export default Error
>>>>>>> 0c6fdad (React Router, and Tailwindcss)
