export default function Card({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4 m-2">
      {products &&
        products.map((item) => {
          return (
            <div key={item.id} className="bg-green-200 cursor-pointer">
              <div>
                <img src="https://img.freepik.com/free-photo/foundation-with-dark-background_23-2148978146.jpg?ga=GA1.1.641131847.1723473782&semt=ais_hybrid" />
              </div>
              <div>{item.title}</div>
            </div>
          );
        })}
    </div>
  );
}
