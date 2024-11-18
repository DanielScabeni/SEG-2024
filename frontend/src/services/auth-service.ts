import { supabase } from "../@libs/supabase";
import { ICredential } from "../@libs/types"

const signIn = async (credentials: ICredential) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.username,
        password: credentials.password
    });

    if (error) throw error
    
    return data
}

const signUp = async (user: IUser) => {

    await supabase.auth.admin.createUser({
        user_metadata: { name: user.name },
        email:user.email,
        password: user.password,
        email_confirm: true
    });
}
export const AuthService = {
    signIn
}