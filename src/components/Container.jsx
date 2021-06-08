export function Container({ className, children, ...props }) {
  return (
    <div
      className={
        "w-full mx-5 md:mx-0 md:w-640 lg:w-768 xl:w-1024 2xl:w-1280" +
        (className ? " " + className : "")
      }
      {...props}
    >
      {" "}
      {children}
    </div>
  );
}
