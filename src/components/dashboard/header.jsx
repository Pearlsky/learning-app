import { IoFlameSharp } from "react-icons/io5";

const Header = () => (
  <section>
    <div className="flex justify-between">
      <div>
        <span>Hello Pearl,</span>
        <p className="text-lg text-pryblue font-medium">
          Ready to <span className="text-pryorange">play English?</span>
        </p>
      </div>
      <article className="w-fit h-fit flex items-center gap-1 px-2 py-1.5 bg-white rounded-full">
        <span className="p-1 border border-pryorange rounded-full">
          <IoFlameSharp className="text-sm text-pryorange" />
        </span>
        <span className="text-sm font-medium">65</span>
      </article>
    </div>
  </section>
);

export default Header;
