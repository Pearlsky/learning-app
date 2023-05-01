const StatusRing = () => (
  <div className="py-2">
    <article className="relative h-28 w-28">
      <div className="relative flex items-center overflow-hidden justify-center w-full h-full bg-pryorange rounded-full before:absolute before:top-[-10px] before:left-[-10px] before:w-16 before:h-16 before:skew-y-14 before:bg-secorange "></div>
      <div className="absolute top-[calc(100%/10)] left-[calc(100%/10)] w-[80%] h-[80%] flex items-center justify-center bg-white rounded-full">
        <span className="block text-3xl font-medium">70%</span>
      </div>
    </article>
  </div>
);

export default StatusRing;
