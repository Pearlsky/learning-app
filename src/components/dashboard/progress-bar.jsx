const ProgressBar = () => (
  <article className="flex items-center gap-2">
    <div className="w-full flex-1 h-fit bg-secblue rounded-full">
      <div className="w-3/5 py-[5px] bg-pryblue rounded-full"></div>
    </div>
    <span className="text-sm">60%</span>
  </article>
);

export default ProgressBar;
