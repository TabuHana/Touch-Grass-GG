import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserInput {
    name: string;
    email: string;
    password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true,
        },
        name: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    let user = this as UserDocument;

    if(!user.isModified('password')) {
        return next()
    }

    const salt = await bcrypt.genSalt(config.get('saltWorkFactor'));
	const hash = bcrypt.hashSync(user.password, salt);

	user.password = hash;

	return next();
})

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
	const user = this as UserDocument;

	return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;