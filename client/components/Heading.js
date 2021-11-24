import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/router";

function Heading({ title, subTitle }) {
  const router = useRouter();

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="heading my-2 mb-10 flex items-center ">
      <button onClick={goBack}>
        <MdArrowBackIosNew size="25" />
      </button>
      <h3 className="text-xl capitalize font-display ml-5">
        {subTitle} <span className="text-primary uppercase">{title}</span>
      </h3>
    </div>
  );
}

export default Heading;
