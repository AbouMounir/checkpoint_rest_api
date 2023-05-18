import mongoose from "mongoose";


const User = mongoose.model('users', {
    FirstName : String ,
    LastName : String,
    email : String,
    age : Number,
});

export default User ;