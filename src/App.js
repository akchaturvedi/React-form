import { useState } from "react";
import "./App.css";

function App() {

  const [FormData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", cityName: "", stateName: "", cityCode: "", comments: false, candidates: false, offers: false
    , pushNotification: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function sumbitHandler(event){
    event.preventDefault();
    console.log('print ho gaya bhai ')
    console.log(FormData)
  }

  return (
    <div className="w-1/2 mx-auto px-0.5 bg-violet-200 rounded-md mt-10 mb-20 ">

      <h1> form bhar do bhai</h1>

      <form onSubmit={sumbitHandler}  className=" flex flex-col px-10"><br/>

        <label htmlFor="firstName" >firstName</label> 
        <input
          type="text"
          placeholder="adesh"
          id="firstName"
          name="firstName"
          value={FormData.firstName}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />

        <label htmlFor="lastName">lastName</label> 
        <input
          type="text"
          placeholder="chaturvedi"
          id="lastName"
          name="lastName"
          value={FormData.lastName}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />



        <label htmlFor="email">Email</label> 
        <input
          type="email"
          placeholder="adeshchaturvedi51@gmail.com"
          id="email"
          name="email"
          value={FormData.email}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />

        <label htmlFor="country" >Country</label> 
        <select
          id="country"
          name="country"
          value={FormData.country}
          onChange={changeHandler}
          className="outline rounded-sm">
          <option>India</option>
          <option>USA</option>
          <option>Landon</option>
          <option>pakistan</option>
        </select> <br />

        <label htmlFor="streetAddress">street Address</label> 
        <input
          type="text"
          placeholder=" main hostel , bareilly"
          id="streetAddress"
          name="streetAddress"
          value={FormData.streetAddress}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />

        <label htmlFor="cityName">City</label> 
        <input
          type="text"
          placeholder="bareilly"
          id="cityName"
          name="cityName"
          value={FormData.cityName}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />


        <label htmlFor="stateName">state/Province</label> 
        <input
          type="text"
          placeholder="utter pradesh"
          id="stateName"
          name="stateName"
          value={FormData.stateName}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />

        <label htmlFor="cityCode">Zip/Postal code</label> 
        <input
          type="number"
          placeholder="243006"
          id="cityCode"
          name="cityCode"
          value={FormData.cityCode}
          onChange={changeHandler}
          className="outline rounded-sm"
        /> <br />

        <fieldset className="flex flex-wrap">
          <legend className="font-bold">By Email</legend>

          <div className=" flex flex-row items-baseline">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={FormData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notify when someones post a comment on a posting</p>
            </div>
          </div>


          <div className=" flex flex-row items-baseline">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={FormData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notify when candidates apply for job</p>
            </div>
          </div>


          <div className=" flex flex-row items-baseline">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={FormData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">offers</label>
              <p>Get notify when candidates accept and reject the offers</p>
            </div>
          </div>
        </fieldset> <br/> 

        <fieldset>

          <legend className="font-bold"> Push notification</legend>
          <p>These are deleverd via SMS to your phone</p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everythings"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverythings">Everythings</label><br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            value="same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverythings">same as Email</label> <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothings">No Push Notification</label>
        </fieldset> <br/>



        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 w-1/5 mx-auto  ">SAVE</button>

        <br/><br/>


      </form>

    </div>

  );
}

export default App;
