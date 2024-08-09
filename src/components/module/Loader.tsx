import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <Bars
        height="40"
        width="80"
        color="#7e22ce"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
