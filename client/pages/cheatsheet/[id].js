import Card from "../../components/Card";
import Heading from "../../components/Heading";
import { parseCookies, destroyCookie } from "nookies";
import { MdAddBox } from "react-icons/md";
import router from "next/router";

function cheatsheetById({ cheatsheet }) {
  return (
    <section className="relative">
      <MdAddBox
        style={{ top: "-10px" }}
        size="38"
        onClick={() => {
          router.push(`/add-code/${cheatsheet._id}`);
        }}
        className="text-primary cursor-pointer absolute z-0 right-0"
      />
      <Heading subTitle="collection of" title={cheatsheet.name} />
      {
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {cheatsheet.codes.map((code) => {
            return <Card key={code._id} title={code.title} code={code.body} />;
          })}
        </div>
      }
    </section>
  );
}

export default cheatsheetById;

export const getServerSideProps = async (context) => {
  let data = {};

  // getting cookies
  const cookies = parseCookies(context);
  let token = cookies.token;

  // if token is not available
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const { id } = context.query;

  // making request
  const res = await fetch(`http://localhost:8000/api/cheatsheet/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // unauthorized
  if (res.status === 401 || res.status === 403) {
    destroyCookie(context, "token");
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  // notFound
  else if (res.status === 400) {
    return {
      notFound: true,
    };
  }
  // success
  else if (res.status === 200) {
    data = await res.json();
  }

  return {
    props: {
      cheatsheet: data,
    },
  };
};