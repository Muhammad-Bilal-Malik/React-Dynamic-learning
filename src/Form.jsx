import React from "react";

const Form = () => {
  return (
    <div className="max-w-[1366px] mt-5">
      <div className="w-[60%] mx-auto ">
        <form action="/submit" method="post">
          <h2 className="font-bold text-3xl text-center py-2">
            User Information
          </h2>

          <div class="flex items-center mb-3">
            <label for="name" class="w-32 font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="username" class="w-32 font-bold">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="email" class="w-32 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="phone" class="w-32 font-bold">
              Phone No.:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="website" class="w-32 font-bold">
              Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <h3 class="text-lg font-semibold mt-6 mb-2">Address</h3>

          <div class="flex items-center mb-3">
            <label for="street" class="w-32 font-bold">
              Street:
            </label>
            <input
              type="text"
              id="street"
              name="street"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="suite" class="w-32 font-bold">
              Suite:
            </label>
            <input
              type="text"
              id="suite"
              name="suite"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="city" class="w-32 font-bold">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="zipcode" class="w-32 font-bold">
              ZipCode:
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div class="flex items-center mb-3">
            <label for="company" class="w-32 font-bold">
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              class="flex-1 border rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-center mb-6">
            <button
              className="font-semibold text-gray-900 bg-gray-400 hover:bg-gray-500 px-3 py-1.5 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
