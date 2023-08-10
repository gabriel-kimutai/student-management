  <div class="max-w-xl">
    <form action="?/register" method="post" enctype="multipart/form-data">
      <div class="flex-col space-y-4">
        <div >
          <div>
            <label class="label">
              <span>Registration Number</span>
              <input
                type="text"
                name="username"
                class="input variant-form-material"
                placeholder="Reg.No"
              />
            </label>
          </div>
          <div>
            <label class="label">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                class="input variant-form-material"
                placeholder="First Name"
              />
            </label>
          </div>
          <div>
            <label class="label">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                class="input variant-form-material"
                placeholder="Last Name"
              />
            </label>
          </div>
          <div>
            <label class="label">
              <span>Email</span>
              <input
                type="email"
                name="email"
                class="input variant-form-material"
                placeholder="Email"
              />
            </label>
          </div>
          <div>
            <label class="label">
              <span>Password</span>
              <input
                type="password"
                name="password"
                class="input variant-form-material"
                placeholder="Password"
              />
            </label>
          </div>
          <div>
            <span>Profile Picture</span>
            <input type="file" class="input variant-form-material" name="avatar" />
          </div>
          <div>
            <label class="label">
              <span>Role</span>
              <select name="role" id="role" class="select variant-form-material">
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <button type="submit" class="btn w-full variant-filled">Register</button>
        </div>
      </div>
    </form>
  </div>
