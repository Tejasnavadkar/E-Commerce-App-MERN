import crypto from 'crypto'

export const hashPassword = (password) => {
    const salt = crypto.randomBytes(16);
    const  hashedPassword = crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256')
    return {
        salt,
        hashedPassword
    }
}

const compareHashPassword = (password,salt) =>{
   const hashedPassword = crypto.pbkdf2Sync(password,salt,310000, 32, 'sha256')
    if (!crypto.timingSafeEqual(Buffer.from(User.password), hashedPassword)) {
           return false
        }
    return true
}