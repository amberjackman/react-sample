import LoginButton from "./LoginButton";

export default function Login(props) {
  // console.log(props);  

  // function login() {
  //     setTimeout(() => {
  //       //page move  
  //       props.history.push("/");
  //     }, 1000);
  //   }

  return (
    <div>
      <h2>
        login page.
      </h2>
      <LoginButton />
    </div>
  )
}