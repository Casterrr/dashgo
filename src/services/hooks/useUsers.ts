import { useQuery } from "react-query"
import { api } from "../api"

type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}
interface Data {
    users: User[]
}

export async function getUser(): Promise<User[]> {
    const { data } = await api.get<Data>("users")
        
    const users = data.users.map(user => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: new Date(user.created_at).toLocaleDateString('pt-BT', {
                day: '2-digit',
                month:'long',
                year: 'numeric'
            })
        }
    })

    return users
}

export function useUsers() {
    return useQuery("users", getUser, {
        staleTime: 1000 * 5 // 5 seconds
    })
}