import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose;

const userSchema = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    stripe_account_id: { type: String, default: "" },
    stripe_seller: {},
    stripeSession: {}
}, {
    timestamps: true
})

userSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        return bcrypt.hash(user.password, 12, function (err, hash) {
            if (err) {
                console.log("BCRYPT HASH ERR", err);
                return next(err);
            }
            user.password = hash;
            return next();
        })
    } else {
        return next();
    }
})

// export default mongoose.model("User", userSchema);

const User = mongoose.model("User", userSchema);
export default User;