import Nav from "@/components/nav";

/* eslint-disable react/prop-types */
const AppLayout = ({ children }) => (
  <>
    <div className="max-w-[400px] w-full mx-auto">
      <div>
        <div className="min-h-screen px-5 pt-8 pb-24 bg-bgblue">{children}</div>
      </div>
      <Nav />
    </div>
  </>
);

export default AppLayout;
