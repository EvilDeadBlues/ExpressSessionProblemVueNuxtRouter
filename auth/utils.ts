import bcrypt from "bcrypt-nodejs";

export namespace Utils {
    export function generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    }

};

export default Utils;