export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectURL = 'http://localhost:3000/'
const ClientID = "52d4e09538b948bcba940340d7960e38"
const scopes = 
[
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]
export const getTokenFromUrl = () =>
{
    return window.location.hash 
    .substring(1)
    .split('&')
    .reduce((initial,item ) => 
    {
        let parts = item.split('=')
        initial [parts[0]]= decodeURIComponent(parts[1]) 
        return initial
   },{})
}
export const loginURL = authEndpoint + '?client_id='+ClientID+'&redirect_uri='+ redirectURL+'&scope='+scopes.join('%20')+'&response_type=token&show_dialog=true'