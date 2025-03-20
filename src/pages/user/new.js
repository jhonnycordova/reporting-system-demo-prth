import { useState, useEffect } from 'react';


export default function Page() {


return (
  <div className="container">

     <h2 className="my-4">
       Create User
    </h2>        
    <div className="row">
       <div className="col-md-8">
         <form onSubmit="" noValidate>
           <div className="mb-3">
             <label className="form-label">Email</label>
             <input required type="text" className="form-control" name="email" id="email" value="" onChange="" />
           </div>
           <div className="mb-3">
             <label htmlFor={'firstName'} className="form-label">First  Name</label>
             <input required type="text" className="form-control" name="firstName" id="firstName" value="" onChange="" />
           </div>
           <div className="mb-3">
             <label htmlFor={'lastName'} className="form-label">Last  Name</label>
             <input required type="text" className="form-control" name="lastName" id="lastName" value="" onChange="" />
           </div>
           <div className="mb-3">
             <label htmlFor={'password1'} className="form-label">Password</label>
             <input required type="password" className="form-control" name="password1" id="password1" value="" onChange="" />
           </div>
           <div className="mb-3">
             <label htmlFor={'password2'} className="form-label">Password</label>
             <input required type="password" className="form-control" name="password2" id="password2" value="" onChange="" />
           </div>
           <div>
            <div className="mb-3">
              <label htmlFor={'role'} className="form-label">Role</label>
              <select className="form-select" name="role" id="role" value="" onChange="">
                <option key="1" value="">owner</option>
                <option key="2" value="">editor</option>
                <option key="3" value="viewer">viewer</option>
              </select>
            </div>
           </div>
           <div className="form-check mb-3">
             <label htmlFor={'disabled'} className="form-label">Disabled</label>
             <input className="form-check-input" type="checkbox" aria-label='disabled' name="disabled" id="disabled" defaultChecked="" onChange=""/>
           </div>   
           <button type="submit" className="btn btn-primary">
              Create
            </button>       
         </form>
       </div>
      </div>          

  </div>
 );
}



