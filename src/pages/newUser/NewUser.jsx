import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser" >
      <h1 className="newUserTitle">New User</h1>
       <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="Join" />
            </div>
            <div className="newUserItem">
                <label>Full Name</label>
                <input type="text" placeholder="Join Smith" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="join@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
            </div>
            <div className="newUserItem">
                <label>Adress</label>
                <input type="text" placeholder="New Yourk | USA" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <input type="radio" name="gender" id="male" value="male"/>
                  <label form="male">Male</label>
                  <input type="radio" name="gender" id="female" value="female"/>
                  <label form="female">Female</label>
                  <input type="radio" name="gender" id="other" value="other"/>
                  <label form="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            <button className="newUserButton">Create</button>
       </form>
    </div>
  )
}
