
export const initialState = {
    user : null,
    playlists: [],
    playing : false,
    item:null,


    ///
    //token : "BQD7UZ7-AWGb_bOWAsGXdK0Ta_dUoLsWaiWgz8IZrreGECuMsISJJgbIgbmOZqlXu1LZubSVdFS-doaqQPPKzcrq2UFnOSJefGq7yd65thTR3Oyc-nlfltI07r9T-4tvoAdvi3hS-2Fw--EkB9kRIQbitJkkdYdazBUXQuKJFjo41kxKKTe"
}
export  const reducer = (state,action) => 
{
    switch(action.type)
    {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "Set_Token":
            return{
                ...state,
                token: action.token
            }
        case 'USER_PLAYLIST':
            return{
                ...state,
                playlist: action.playlist
            }
        case 'USER_DISCOVER':
            return{   ...state,
                Discover : action.Discover
            }
        default:
            return state;

    }
}
// export default reducer