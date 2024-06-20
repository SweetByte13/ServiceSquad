import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage({error}) {
  //const error = useRouteError();
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <p>Error: {error}</p>
      </main>
    </>
  );
}

export default ErrorPage;