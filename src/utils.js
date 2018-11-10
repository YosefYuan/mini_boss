export function getRedirectPath({ type, avatar }) {
    console.log({type})
    let url = (type == 'boss') ? 'boss' : 'genius'
    console.log({url})
    if (!avatar) {
        url += 'info'
    }
    console.log({ url })
    return url
}