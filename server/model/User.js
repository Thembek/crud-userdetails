import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema(
    {
        name: String,
        username: String,
        email: String,
        phone: Number,
    },
    { timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const postUser = mongoose.model('User', userSchema);
export default postUser;