// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {


  return (
    <div className="flex flex-col items-center justify-center flex-grow gap-2" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{}</i>
      </p>
    </div>
  );
}