import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const  isLoggedIn ={
  status:0
}
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];



function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>
    Click me
  </button>
  );
}
function LoginForm() {
  return (
    <h4>This login form</h4>
  );
}
function AdminPanel() {
  return (
    <h4>This Admin Panel</h4>
  );
}
export default function MyApp() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <>
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
   
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
<div>
  {isLoggedIn.status == 1 ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}

</div>


    <ul>{listItems}</ul>

  </>
  );
}

//export default App;
