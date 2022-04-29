import spinner from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className='2-100 mt-20'>
      <img
        src={spinner}
        alt='Loading...'
        width={100}
        className='text-center mx-auto'
      />
    </div>
  );
}

export default Spinner;
