export const Image = ({ src }: { src: string }) => {
  return (
    <div>
      <img src={src} />
      <a href="https://www.pexels.com">Photos provided by Pexels</a>
    </div>
  );
};
