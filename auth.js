import NextAuth, {CredentialsSignin} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials:{
        email:{label:"Email", type:"email"},
        password:{label:"Password",type:"password"}
      },
      authorize:async(credentials)=>{
        const {email,password} = credentials
        if(!email || !password) return null

      const user = {"email":"test@test.com",id:"123"}
       if(password === "password" && email === "test@test.com") return user
       throw new CredentialsSignin(
        "Invalid credential"
       )
      }
    }),
  ],
})