export default function Banner({ image }) {
  return (
    <div>
      <img
        src={
          image
            ? image
            : "https://img.freepik.com/premium-vector/social-media-banners-facebook-cover-photo-design-vector-editable-digital-marketing-advertisement_607098-901.jpg?w=826"
        }
        className="cover w-full h-screen"
      />
    </div>
  );
}
