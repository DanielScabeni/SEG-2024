import { ICredentials } from "../@libs/types"

const signIn = async (credentials: ICredentials) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.username,
        password: credentials.password
    });

    if (error) throw error
    
    return data
}

export const AuthService = {
    signIn
}