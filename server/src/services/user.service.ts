import { omit } from "lodash";
import UserModel from "../models/user.model";

export async function createUser(input: any) {
    try {
		const user = await UserModel.create(input);
		return omit(user.toJSON(), 'password');
	} catch (error: any) {
		throw new Error(error);
	}
}
