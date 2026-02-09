const Register = () => {
  return (
    <div className="w-[40%] mx-auto min-w[500px]">
      <form>
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
        <div>
          <p>Photo</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
          />
        </div>
        <button className="btn btn-primary w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
