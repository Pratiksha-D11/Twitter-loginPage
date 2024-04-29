
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="logo-box">
          <img src="./Tweeter.jpeg" alt="Tweeter" className="logo" width="30px" height="30px" />
          <h2>Sign in to Tweeter</h2>
          <button>
            <img src="./Google.png" alt="Google" width="30px" height="10px" />
            Sign in with Google
          </button>
          <button>
            <img src="./Apple.png" alt="Apple" width="30px" height="10px" />
            Sign in with Apple
          </button>
          <hr />
          <span>Or</span>
          <form>
            <input type="text" placeholder="Phone number, email, or username" />
            <button>Next</button>
          </form>
          <button>Forgot Password</button>
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
