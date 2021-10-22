

export type FriendType = {
    id: number
    name: string
    avatar: string
}
export type FriendsBarType = {
    friends: Array<FriendType>
}




let initialState:FriendsBarType = {
        friends: [
            {
                id: 1,
                name: 'Tolya',
                avatar: 'https://source.unsplash.com/weekly?user'
            },
            {
                id: 2,
                name: 'Yura',
                avatar: 'https://source.unsplash.com/user/erondu/daily'
            },
            {
                id: 3,
                name: 'Leha',
                avatar: 'https://source.unsplash.com/weekly?man'
            },
            {
                id: 4,
                name: 'Ruslan',
                avatar: 'https://source.unsplash.com/weekly?man'
            },
            {
                id: 5,
                name: 'Kostya',
                avatar: 'https://source.unsplash.com/weekly?man'
            },
        ]
    };

const friendsBarReducer =(state = initialState ,action:any) => {


    return state
}



export default friendsBarReducer